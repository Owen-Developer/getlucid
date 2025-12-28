const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();
const cors = require('cors');
const crypto = require('crypto');
const e = require('express');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
db.query('SELECT 1', (err, results) => {
    if (err) console.error('Error running query:', err);
    else console.log('Database is working');
});

const store = new MySQLStore({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT 
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1);

app.use(session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, "docs")));




////////////////////////// REUSABLE FUNCTIONS //////////////////////////
async function sendEmail(userEmail, text) {
    const dataToSend = { reciever: userEmail, text: `${text}`, service: 'nextdesign' };
    try {
        const response = await fetch('https://email-sender-lkex.vercel.app/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dataToSend), 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData.error);
            return;
        }
    } catch (error) {
        console.error('Error posting data:', error);
    }
}
function getCurrentDate() {
    const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
}
function getTime(){
    const now = new Date();
    let timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    if(Number(timeString.slice(0, 2)) > 12){
        timeString = String(Number(Number(timeString.slice(0, 2)) - 12)) + timeString.slice(2) + "pm";
    } else if(Number(timeString.slice(0, 2)) == 12){
        timeString = timeString + "pm";
    } else {
        timeString = timeString + "am";
    }
    return timeString;
}
function getTimeStr(){
    const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ];
    const todayDate = getCurrentDate();
    let monthTxt = months[Number(todayDate.split("/")[1]) - 1];
    let monthNum = todayDate.split("/")[0];
    let yearNum = todayDate.split("/")[2];
    const now = new Date();
    let timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    if(Number(timeString.slice(0, 2)) > 12){
        timeString = String(Number(Number(timeString.slice(0, 2)) - 12)) + timeString.slice(2) + "pm";
    } else if(Number(timeString.slice(0, 2)) == 12){
        timeString = timeString + "pm";
    } else {
        timeString = timeString + "am";
    }
    return `${monthTxt} ${monthNum}, ${yearNum} at ${timeString}`;
}
function createNoti(userId, title, type){
    db.query("insert into notifications (user_id, title, full_date, type, status) values (?, ?, ?, ?, ?)", [userId, title, getTimeStr(), type, "unread"], (err, result) => {
        if(err){
            console.error(err);
        }
    });
}
function sendVerificationCode(userEmail, code){
    sendEmail(userEmail, "Your verification code is " + code);
}




////////////////////////// APIS ROUTES //////////////////////////
app.post("/api/get-user", (req, res) => {
    const { id, newUser } = req.body;

    if(newUser){
        db.query("insert into users (name) values (?)", ["n/a"], (err, result) => {
            if(err){
                console.error(err);
            }

            db.query("select * from users where id = ?", [result.insertId], (err, result) => {
                if(err){
                    console.error(err);
                }

                let userData = result[0];
                userData.password_hash = "";
                req.session.userId = userData.id;
                return res.json({ message: 'success', userData: userData });
            });
        });
    } else {
        db.query("select * from users where id = ?", [id], (err, result) => {
            if(err){
                console.error(err);
            }

            if(result.length == 0){
                return res.json({ message: 'failure' });
            }

            let userData = result[0];
            userData.password_hash = "";
            req.session.userId = userData.id;

            db.query("select * from notifications where user_id = ? order by id desc", [userData.id], (err, result) => {
                if(err){
                    console.error(err);
                }

                let notifications = [];
                result.forEach(noti => {
                    notifications.push(noti);
                });
                userData.notifications = notifications;
                return res.json({ message: 'success', userData: userData });
            });
        });
    }
});

app.get("/api/mark-read", (req, res) => {
    db.query("update notifications set status = ?", ["read"], (err, result) => {
        if(err){
            console.error(err);
        }

        return res.json({ message: 'success' });
    });
});

app.get("/api/get-dreams", (req, res) => {
    db.query("select * from dreams where user_id = ? order by id asc", [req.session.userId], (err, result) => {
        if(err){
            console.error(err);
        }

        return res.json({ message: 'success', dreams: result })
    });
});

app.post("/api/save-dream", (req, res) => {
    const data = req.body.dreamData;

    if(data.id){
        db.query("update dreams set user_id = ?, title = ?, para = ?, full_date = ?, full_time = ?, is_saved = ?, dream_type = ?, dream_vivid = ?, dream_length = ?, dream_quality = ?, dream_recurring = ?, dream_emotion = ?, dream_people = ?, dream_objects = ? where id = ?", [req.session.userId, data.title, data.para, data.date, getTime(), "no", data.type, data.vivid, data.length, data.sleep, data.recurring, data.emotion, data.people, data.objects, data.id], (err, result) => {
            if(err){
                console.error(err);
            }

            db.query("select * from dreams where user_id = ? order by id asc", [req.session.userId], (err, result) => {
                if(err){
                    console.error(err);
                }
    
                return res.json({ message: 'success', dreams: result })
            });
        });
    } else {
        db.query("insert into dreams (user_id, title, para, full_date, full_time, is_saved, dream_type, dream_vivid, dream_length, dream_quality, dream_recurring, dream_emotion, dream_people, dream_objects) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.session.userId, data.title, data.para, data.date, getTime(), "no", data.type, data.vivid, data.length, data.sleep, data.recurring, data.emotion, data.people, data.objects], (err, result) => {
            if(err){
                console.error(err);
            }
    
            db.query("select * from dreams where user_id = ? order by id asc", [req.session.userId], (err, result) => {
                if(err){
                    console.error(err);
                }
    
                return res.json({ message: 'success', dreams: result })
            });
        });
    }
});

app.post("/api/book-dream", (req, res) => {
    db.query("update dreams set is_saved = ? where id = ?", [req.body.goal, req.body.id], (err, result) => {
        if(err){
            console.error(err);
        }

        return res.json({ message: 'success' });
    });
});

app.post("/api/get-saved-techniques", (req, res) => {
    const idx = req.body.idx;

    db.query("select * from saved_techniques where user_id = ? and idx = ?", [req.session.userId, idx], (err, result) => {
        if(err){
            console.error(err);
        }

        let status;
        if(result.length == 0){
            status = "no";
        } else {
            status = result[0].status;
        }
        return res.json({ message: 'success', status: status });
    });
});

app.post("/api/save-technique", (req, res) => {
    const { idx, goal } = req.body;

    db.query("select * from saved_techniques where user_id = ? and idx = ?", [req.session.userId, idx], (err, result) => {
        if(err){
            console.error(err);
        }

        if(result.length == 0){
            db.query("insert into saved_techniques (idx, user_id, status) values (?, ?, ?)", [idx, req.session.userId, goal], (err, result) => {
                if(err){
                    console.error(err);
                }

                return res.json({ message: 'success' });
            });
        } else {
            db.query("update saved_techniques set status = ? where user_id = ? and idx = ?", [goal, req.session.userId, idx], (err, result) => {
                if(err){
                    console.error(err);
                }

                return res.json({ message: 'success' });
            });
        }
    });
});

app.post("/api/send-code", (req, res) => {
    db.query("select * from users where email = ?", [req.body.email], (err, result) => {
        if(err){
            console.error(err);
        }

        if(result.length == 0){
            return res.json({ message: 'noemail' });
        }

        const code = Math.floor(100000 + Math.random() * 900000);
        sendVerificationCode(result[0].email, code);
        db.query("update users set verification_code = ? where id = ?", [code, result[0].id], (err, result) => {
            if(err){
                console.error(err);
            }
            
            return res.json({ message: 'success' });
        });
    });
});

app.post("/api/verify", (req, res) => {
    const { code, password } = req.body;

    db.query("select * from users where verification_code = ?", [code], (err, result) => {
        if(err){
            console.error(err);
        }

        if(result.length == 0){
            return res.json({ message: 'codeerror' });
        }

        let userId = result[0].id;
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if(err){
                console.error(err);
            }

            db.query("update users set password_hash = ?, verification_code = ? where id = ?", [hashedPassword, "n/a", userId], (err, result) => {
                if(err){
                    console.error(err);
                }

                req.session.userId = userId;
                return res.json({ message: 'success' });
            });
        });
    });
});

app.post("/api/signup", (req, res) => {
    const { name, email, password } = req.body;
    db.query("select * from users where email = ?", [email], (err, result) => {
        if(err){
            console.error(err);
            return res.json({ message: 'servererror' });
        }

        if(result.length > 0){
            return res.json({ message: 'emailtaken' });
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if(err){
                console.error(err);
                return res.json({ message: 'servererror' });
            }

            db.query("insert into users (name, email, password_hash) values (?, ?, ?)", [name, email, hashedPassword], (err, result) => {
                if(err){
                    console.error(err);
                }

                req.session.userId = result.insertId;
                return res.json({ message: 'success', id: result.insertId });
            });
        });
    });
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    db.query("select * from users where email = ?", [email], (err, result) => {
        if(err){
            console.error(err);
            return res.json({ message: 'servererror' });
        }

        if(result.length == 0){
            return res.json({ message: 'nouser' });
        }

        bcrypt.compare(password, result[0].password_hash, (err, isMatch) => {
            if(err){
                console.error(err);
                return res.json({ message: 'servererror' });
            }

            if(!isMatch){
                return res.json({ message: 'passworderror' });
            }

            req.session.userId = result[0].id;
            return res.json({ message: 'success', id: result[0].id });
        });
    });
});

app.get("/api/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: 'failed' });
        }
        return res.json({ message: 'success' });
    });
});

app.get("/api/delete-data", (req, res) => {
    db.query("delete from users where id = ?", [req.session.userId], (err, result) => {
        if(err){
            console.error(err);
        } 

        req.session.destroy(err => {
            if (err) {
            console.error("Logout error:", err);
            return res.status(500).json({ message: 'failed' });
            }
            return res.json({ message: 'success' });
        });        
    });
});






app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});