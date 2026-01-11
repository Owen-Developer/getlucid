if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registered!"))
    .catch(err => console.error("Service Worker registration failed:", err));
}


let url = "";
if(!window.location.href.includes("localhost")){

}

let techIdx = 0;
let tutIdx = 0;
let tutInt;

let dreamEditing = false;

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

const techData = [
  {
    "name": "Wake Induced",
    "icon": "/vectors/puzzle.png",
    "title": "Wake Induced (WILD)",
    "description": "Entering a dream directly from wakefulness without losing awareness.",
    "difficulty": 9,
    "success": 7,
    "para": "WILD involves remaining aware while your body falls asleep, transferring consciousness directly into the dream state. This demands calm focus, relaxation, and patience.<br><br>Practicing WILD is easiest during WBTB when the mind is lightly awake. Avoid forcing control; instead, observe sensations passively. Let sleep approach naturally, maintaining gentle awareness."
  },
  {
    "name": "Memory Induced",
    "icon": "/vectors/spinner.png",
    "title": "Memory Induced (MILD)",
    "description": "Using intention and memory recall to become aware during a dream.",
    "difficulty": 4,
    "success": 7,
    "para": "MILD works by repeating a phrase and visualizing remembering to realize you're dreaming. The goal is forming memory-triggered self-awareness within dreams.<br><br>This technique strengthens over days with practice. Clear intention before sleep is essential. Do not try to force control; instead, gently expect recognition the moment dream sensations form."
  },
  {
    "name": "Anchor Technique",
    "icon": "/vectors/anchor.png",
    "title": "Anchor Technique",
    "description": "Maintaining awareness by lightly focusing on one steady sensation.",
    "difficulty": 5,
    "success": 6,
    "para": "Anchoring allows the mind to drift toward sleep without losing awareness completely. You choose a sensation, breath, heartbeat, or weight of the body.<br><br>Hold attention softly, never tightly. If the focus slips, return gently without frustration. Calmness is crucial. This technique reflects patience and surrender rather than exertion or control."
  },
  {
    "name": "Senses Induced",
    "icon": "/icons/ripple.png",
    "title": "Senses Induced (SSILD)",
    "description": "Cycling through senses to heighten awareness entering sleep.",
    "difficulty": 3,
    "success": 8,
    "para": "SSILD works by repeatedly shifting focus between sight, sound, and touch. These cycles stabilize awareness while the body transitions naturally into sleep.<br><br>Use slow, relaxed cycles. Do not analyze sensations. Simply notice and move on. This creates a soft awareness that continues into dreams, increasing vividness and clarity."
  },
  {
    "name": "Finger Induced",
    "icon": "finger-tap.png",
    "title": "Finger Induced (FILD)",
    "description": "Small finger movements during sleep onset to stay gently aware.",
    "difficulty": 4,
    "success": 6,
    "para": "FILD involves performing tiny finger taps while falling back asleep. These movements help maintain gentle awareness without waking fully.<br><br>Perform this during WBTB when you're very relaxed. Keep movements subtle. If done correctly, you will transition directly into a lucid dream with little mental strain."
  },
  {
    "name": "Counting Technique",
    "icon": "counting.png",
    "title": "Counting Technique",
    "description": "Using a stable counting rhythm to maintain awareness during sleep onset.",
    "difficulty": 5,
    "success": 6,
    "para": "Counting focuses the mind while the body drifts into sleep. The count should remain calm and effortless, not forced or tense.<br><br>If thoughts wander, return softly to counting. The goal is gentle awareness, not precision. This method rewards patience and a quiet, humble approach to falling asleep."
  },
  {
    "name": "Dream Journaling",
    "icon": "/vectors/feather.png",
    "title": "Dream Journaling",
    "description": "Recording dreams daily to increase recall and awareness.",
    "difficulty": 2,
    "success": 9,
    "para": "Journaling strengthens memory of dreams, making lucidity much more likely. Improved recall helps you recognize dream patterns and triggers over time.<br><br>Write immediately upon waking. Even brief notes are valuable. This practice deepens awareness of your inner world and encourages a clear, watchful mind before sleep."
  },
  {
    "name": "Wake Back To Bed",
    "icon": "/vectors/timer.png",
    "title": "Wake Back To Bed (WBTB)",
    "description": "Waking mid-sleep to increase awareness before re-entering dreams.",
    "difficulty": 3,
    "success": 9,
    "para": "WBTB increases the chance of lucidity by raising awareness during the REM-heavy second half of sleep. Wake up briefly, then return to bed.<br><br>Keep lights low and avoid stimulation. Pair with MILD, SSILD, or FILD. WBTB works because the body falls asleep quickly while the mind stays lightly aware."
  },
  {
    "name": "Reality Checks",
    "icon": "/vectors/reality.png",
    "title": "Reality Checks",
    "description": "Training awareness during the day so it carries into dreams naturally.",
    "difficulty": 6,
    "success": 8,
    "para": "Reality checks build the habit of questioning consciousness. Over time, this habit transfers into dreams, triggering lucidity when something feels unusual.<br><br>Checks must be done mindfully, not mechanically. Pause, breathe, observe your surroundings. Intentional awareness matters more than frequency or technique used."
  }
];

const tutData = [
    {
        "title": "Wake Induced Lucid Dream (WILD)",
        "headings": [
            "Step 1: Relax Deeply",
            "Step 2: Maintain Awareness",
            "Step 3: Observe Hypnagogia",
            "Step 4: Visualize Your Dream",
            "Step 5: Surrender and Enter"
        ],
        "paras": [
            "Lie down comfortably and release tension in your body. Focus on steady breathing and notice the gentle rhythm of each breath as your muscles soften and your mind remains lightly alert.<br><br>Relaxation opens the gateway to lucid dreaming. When the body rests but awareness remains, the mind senses the threshold between waking and dreaming. Observing these subtle shifts cultivates clarity and patience, allowing inner growth like ripening fruits. The mind prepares to enter the dream world consciously, moving freely while maintaining focus, attention, and subtle guidance throughout the transition.",

            "Keep attention gentle but steady as your body drifts toward sleep. Notice thoughts and sensations, allowing them to come and go without attachment, letting your awareness float like a light breeze.<br><br>This soft awareness ensures your spirit remains attentive while physical senses fade. Observing the subtle shift between wakefulness and sleep strengthens discernment. Each moment of mindfulness nurtures inner growth, like tending small fruits, allowing the mind to notice dream signs and prepare for conscious entry into the dream world with clarity, patience, and subtle, guiding presence.",

            "Observe the flickering shapes, colors, and light behind your closed eyelids. Hypnagogic imagery often appears in brief, shifting patterns that hint at dream formation.<br><br>Watching these signs trains the mind to detect anomalies that indicate a dream is beginning. Each careful observation strengthens awareness and attention. Like harvesting small fruits, noticing details cultivates focus and insight. By attending to these pre-dream signals, the mind prepares to enter the dream consciously, balancing observation with subtle inner guidance and creating a smooth bridge between waking and dreaming states.",

            "Visualize the dream you wish to enter in detail. Imagine moving freely, interacting consciously, and exploring while remaining aware of inner guidance and subtle spiritual presence.<br><br>Deliberate visualization strengthens pathways for lucid awareness. Each rehearsal primes the mind to remain conscious as the dream begins. Like planting seeds that grow into fruits of clarity, visualization integrates focus, intention, and inner discernment. Your dream space becomes fertile for conscious exploration, where awareness guides every movement and observation, allowing intentional navigation and subtle understanding of the dream environment.",

            "Allow yourself to gently surrender to sleep while maintaining awareness. Feel the body drift fully into rest while the mind observes dream sensations and movement unfolding.<br><br>This balance of letting go and attentive observation preserves lucidity. Mindful surrender cultivates clarity and patience. Like tending growing fruits, awareness strengthens naturally. The dream becomes a space for conscious exploration, where perception and focus coexist with subtle inner guidance. Each experience deepens discernment, allowing intentional actions and growth within dreams while building habits of clarity, attention, and mindful presence in daily life."
        ]
    },
    {
        "title": "Memory Induced Lucid Dream (MILD)",
        "headings": [
            "Step 1: Set Your Intention",
            "Step 2: Recall Your Dreams",
            "Step 3: Affirm Your Awareness",
            "Step 4: Visualize Becoming Lucid",
            "Step 5: Drift to Sleep Mindfully"
        ],
        "paras": [
            "Before sleep, state clearly that you will notice when you are dreaming. Repeat this intention with focus, letting the meaning settle gently in your mind.<br><br>Intention plants a seed in consciousness, preparing awareness to bloom in dreams. This practice nurtures patience and clarity, like cultivating fruits that ripen over time. By focusing on your goal, you train the mind to recognise dream signs and maintain alertness, allowing lucidity to arise naturally while the body rests and the spirit remains attentive to subtle signals in the dream threshold.",

            "Recall recent dreams in detail, noticing sensations, emotions, and patterns that seem unusual. Observe inconsistencies that reveal dream logic.<br><br>Reflection strengthens memory and awareness. By harvesting the small fruits of past experiences, the mind learns to detect anomalies more quickly. This attention cultivates clarity, patience, and subtle discernment. Observing past dreams prepares consciousness to recognise dream signs with ease. The habit grows inner focus, allowing the mind to enter future dreams with readiness, intention, and gentle presence, bridging waking reflection with lucid awareness in a way that nourishes growth and mindful perception.",

            "Repeat affirmations like 'I will know I am dreaming' or 'I remain aware within dreams.' Speak them with attention and intention, feeling their subtle meaning.<br><br>Affirmations reinforce focus and cultivate lucidity. Each repetition strengthens attention and patience, nurturing insight like ripening fruits. This gentle reinforcement encourages the mind to carry awareness into sleep. By combining words with observation, intention prepares the mind to notice when a dream begins. Consistent practice deepens clarity, discernment, and mindful presence, allowing conscious navigation in dreams and fostering subtle inner growth throughout sleep and waking life.",

            "Visualize yourself back in a previous dream, recognising it as a dream and acting with awareness. Imagine moving freely, observing details, and responding intentionally.<br><br>Deliberate visualization strengthens pathways for lucid consciousness. By rehearsing actions and interactions in your mind, you cultivate insight, clarity, and subtle focus. Like tending small fruits, consistent practice nourishes awareness and mental preparedness. The dream space becomes fertile for exploration and conscious choice. Visualization integrates intention and presence, ensuring the mind remains alert, patient, and capable of navigating dreams with clarity, focus, and subtle guidance, fostering mindful lucidity over time.",

            "Drift into sleep while maintaining soft awareness. Notice sensations, thoughts, and subtle dream cues as your body rests fully and your mind observes.<br><br>This mindful transition balances surrender with alertness, preserving lucidity. Observing the shift cultivates clarity and subtle inner growth, like nurturing ripening fruits. Dreams become spaces for intentional exploration, where perception, focus, and guidance coexist. Each night strengthens the mind’s ability to recognise dream signs and act consciously, building habits of presence and discernment that carry into waking life, fostering patience, clarity, and mindful awareness in every moment."
        ]
    },
    {
        "title": "Anchor Technique",
        "headings": [
            "Step 1: Choose Your Anchor",
            "Step 2: Focus Daily",
            "Step 3: Test Its Presence",
            "Step 4: Reinforce in Reflection",
            "Step 5: Carry it Into Dreams"
        ],
        "paras": [
            "Select a meaningful object, gesture, or phrase to act as your anchor. It should be simple, yet significant enough to draw your awareness when needed.<br><br>The anchor serves as a point of clarity in both waking life and dreams. By returning to it regularly, you cultivate mindful attention. Like a fruit-bearing tree, consistent practice strengthens the mind’s ability to stay aware and attentive. This small habit lays the groundwork for conscious exploration, allowing recognition of subtle shifts and inconsistencies that signal dream states, while nurturing patience, discernment, and inner balance.",

            "Throughout the day, revisit your anchor. Focus on its significance and use it to ground attention whenever you notice distraction or drifting thoughts.<br><br>Daily engagement reinforces mindfulness and cultivates awareness. Like tending growing fruits, repeated practice strengthens clarity and discernment. Returning to your anchor trains your mind to notice when reality shifts, developing readiness to recognise dream signs. This subtle attentiveness prepares consciousness for both waking presence and lucid dreaming, fostering a gentle, steady awareness that becomes second nature and enriches perception, focus, and thoughtful engagement in all moments.",

            "Actively test your anchor by touching it, using its gesture, or saying its phrase, noticing the effect it has on attention and presence.<br><br>This repeated testing strengthens habits of reality-checking and discernment. Like harvesting ripening fruits, each check cultivates inner clarity. By reinforcing the anchor’s presence, you train the mind to remain alert even during sleep. This practice encourages subtle awareness, patience, and focus, creating a bridge between waking attention and lucid dream recognition. Each use of the anchor strengthens conscious presence, allowing the mind to respond intentionally to the dream world and daily life alike.",

            "Integrate your anchor into reflection or meditation. Focus on its symbolism, allowing it to connect with inner guidance and subtle intuition.<br><br>Reflection amplifies the anchor’s effectiveness, cultivating awareness and insight. Like nourishing fruits with care, this practice strengthens focus, patience, and perception. Anchoring consciousness in this way prepares the mind to maintain lucidity in dreams. Each moment of meditation or reflection grows clarity and intentionality, fostering a steady inner presence that carries into sleep, where dreams become spaces for conscious awareness and mindful exploration, guided by cultivated insight and subtle attentiveness.",

            "Carry your anchor into dreams by holding it mentally or invoking its gesture during sleep. Let it stabilise awareness and maintain clarity within dream experiences.<br><br>By anchoring consciousness, your mind remains alert even as the dream world unfolds. This practice cultivates subtle discernment, patience, and clarity, like nurturing fruits to ripeness. Dreams become spaces for intentional navigation, observation, and mindful engagement. The anchor connects waking mindfulness with dream lucidity, allowing consistent awareness, deliberate action, and subtle guidance. Each practice strengthens conscious presence, fostering clarity, focus, and inner growth both in sleep and waking life."
        ]
    },
    {
        "title": "Senses Initiated Lucid Dream (SILD)",
        "headings": [
            "Step 1: Prepare Your Mind",
            "Step 2: Focus on Sensations",
            "Step 3: Move Attention Slowly",
            "Step 4: Detect Dream Signs",
            "Step 5: Enter Consciously"
        ],
        "paras": [
            "Lie down comfortably and settle your body. Take slow breaths and allow awareness to focus inward, noticing subtle sensations in your fingers, toes, and limbs.<br><br>This preparation grounds attention and sharpens sensory perception. By observing these small signals, you cultivate mindfulness, patience, and readiness. Like tending small fruits, consistent practice strengthens awareness. SILD teaches the mind to detect subtle cues that indicate dreaming, allowing you to cross the threshold consciously, observing the dream world with clarity, focus, and a gentle sense of presence while maintaining inner guidance and balance.",

            "Shift your attention gently between sensations in different parts of your body. Notice tingling, warmth, or subtle pressure as if each is a clue pointing toward heightened awareness.<br><br>Slowly moving focus trains attentiveness and sensory discernment. Like observing ripening fruits, you nurture perception while avoiding distraction. This practice strengthens the mind’s ability to notice unusual sensations that often precede lucid dreaming. Awareness grows steadily, preparing you to recognise dream signs when they appear. Sensory mindfulness bridges waking and dreaming, creating fertile ground for conscious entry and subtle guidance throughout the dream experience.",

            "Continue moving attention systematically through the body, letting each sensation be observed without judgment or expectation. Stay patient and grounded.<br><br>This method cultivates fine awareness and subtle attentiveness. Observing each sensation trains the mind to notice inconsistencies or anomalies, which are often early indicators of dreams. Like cultivating a garden of small fruits, careful attention nurtures focus and clarity. These cultivated habits allow the mind to step consciously into a dream once signs appear, strengthening lucidity and the ability to act intentionally while exploring the dream space.",

            "As sensations become more vivid, begin noticing patterns or dream-like cues. Allow the mind to interpret small irregularities as signs of dreaming.<br><br>Detection of dream signs strengthens discernment and presence. Like harvesting tiny fruits, recognizing these subtle markers cultivates clarity and patience. By attending closely to inner signals, the mind becomes skilled at noticing the threshold between waking and dreaming. This process primes conscious entry, allowing the dream experience to unfold while awareness remains intact, providing intentional guidance and subtle perceptive growth within the dream.",

            "Gently allow the dream to form around your awareness. Step into it consciously while maintaining attention to the environment and your inner senses.<br><br>This deliberate transition preserves lucidity and strengthens perception. Like walking through a garden of ripening fruits, awareness guides every movement and observation. The dream becomes a space for conscious exploration, where clarity, attention, and inner guidance coexist. SILD nurtures the ability to act intentionally in dreams, cultivate subtle insight, and maintain mindful presence, providing a consistent practice for expanding perception, patience, and focused awareness during sleep."
        ]
    },
    {
        "title": "Dream Journaling",
        "headings": [
            "Step 1: Keep Your Journal Ready",
            "Step 2: Record Immediately",
            "Step 3: Focus on Details",
            "Step 4: Reflect on Patterns",
            "Step 5: Integrate Insight"
        ],
        "paras": [
            "Place a notebook or digital journal beside your bed. Prepare to record dreams immediately upon waking, before details fade.<br><br>Keeping a journal creates a habit of mindful reflection. Like planting seeds for future insight, it nurtures awareness and recognition of dream signs. This practice strengthens memory, attention, and subtle discernment. Observing and recording dreams consistently cultivates clarity and encourages intentional recall, creating fertile ground for lucid dreaming. Each entry allows the mind to detect recurring symbols, sensations, or patterns, helping consciousness become attuned to the subtle signals that indicate dreaming while fostering inner growth.",

            "Immediately upon waking, jot down all dream details remembered, even small fragments, feelings, or unusual elements.<br><br>Recording promptly preserves delicate observations that would otherwise fade. Like harvesting early fruits, this practice captures the essence of dreams for later reflection. Attention to detail nurtures mindfulness and strengthens memory, providing the foundation for lucid dreaming. Observing patterns over time enhances discernment and presence, allowing the mind to anticipate dream cues. Journaling fosters awareness, patience, and clarity, and the repeated practice encourages growth of conscious recognition, helping the mind bridge waking reflection with intentional dream exploration.",

            "Include as many sensory details as possible: sights, sounds, textures, emotions, and thoughts experienced.<br><br>Focusing on details strengthens attention and subtle perception. Like tending a garden of small fruits, observation cultivates insight, patience, and awareness. Recording sensory elements helps the mind detect anomalies in dreams, building recognition skills and mindfulness. Over time, reviewing entries allows identification of recurring symbols and signs. This reflection strengthens discernment, trains memory, and enhances the ability to remain alert in dreams, preparing the mind to act consciously while exploring dream environments with intention and subtle inner guidance.",

            "Periodically review your journal for patterns or recurring themes. Reflect on unusual symbols, repeated sensations, or emotional responses.<br><br>Reflection deepens understanding and strengthens insight. Like assessing ripening fruits, recognizing patterns cultivates clarity and patience. Awareness of recurring elements provides clues for future lucid dreaming. Observing these motifs allows the mind to anticipate dream signs, increasing readiness for conscious entry. Journaling integrates mindfulness, memory, and reflection, fostering subtle discernment. Each review encourages intentional exploration in dreams, nurturing attention, inner guidance, and the ability to respond thoughtfully within dream spaces while maintaining awareness and clarity.",

            "Use insights gained to inform nightly intentions and dream practice. Let recurring themes guide attention and awareness during sleep.<br><br>Integrating lessons from journaling strengthens lucid dreaming potential. Like harvesting fruits at peak ripeness, reflection produces knowledge and clarity that informs conscious action. Mindful application of dream patterns cultivates presence, insight, and subtle discernment. Each observation and integration enhances the ability to notice dream signs and act intentionally. The journal becomes a tool for awareness, patience, and inner growth, linking waking reflection to dream navigation while supporting subtle guidance, clarity, and purposeful exploration."
        ]
    },
    {
        "title": "Wake Back To Bed (WBTB)",
        "headings": [
            "Step 1: Set an Alarm",
            "Step 2: Wake and Reflect",
            "Step 3: Stay Mindful",
            "Step 4: Return to Sleep",
            "Step 5: Maintain Awareness"
        ],
        "paras": [
            "Set an alarm to wake yourself after four to six hours of sleep, when dreams are often longer and more vivid. Awaken fully enough to regain alertness while staying calm and relaxed.<br><br>This timing enhances lucidity by bridging conscious awareness with dream cycles. Like preparing fertile soil for growing fruits, waking briefly nurtures focus and intention. The brief pause strengthens discernment, attention, and readiness. Observing sensations and thoughts while awake primes the mind to recognise dream cues upon returning to sleep, increasing the likelihood of conscious entry into dreams while cultivating subtle awareness and clarity.",

            "Upon waking, reflect on recent dreams and your intention to recognise dreaming. Engage your mind gently without becoming fully active or distracted.<br><br>Reflection reinforces awareness and primes the mind for lucidity. Like tending young fruits carefully, this practice nurtures discernment and focus. Briefly observing dreams and reinforcing intention strengthens attention, helping the mind recognise subtle cues during subsequent sleep. The process cultivates patience, mindfulness, and clarity, bridging the waking state with dream cycles. Maintaining a balance of gentle reflection and calm observation prepares the mind for conscious re-entry into dreams while fostering subtle growth and perceptive awareness.",

            "Stay awake for ten to thirty minutes, focusing on mindful practices like reading, visualization, or reflection. Avoid stimulating activities that disrupt calm awareness.<br><br>This period deepens alertness and intention, enhancing the mind’s sensitivity to dream signs. Like tending fruit, careful attention nurtures clarity and patience. Maintaining subtle focus during this interval strengthens readiness and the ability to detect anomalies in dreams. Mindful observation and gentle reflection cultivate inner growth, preparing the mind for lucid dreaming while ensuring awareness and attention remain attuned to subtle cues present at the threshold of sleep.",

            "Return to bed calmly, settling into a relaxed position while keeping awareness lightly active. Focus on intention and gentle visualization of entering a lucid dream.<br><br>Transitioning back into sleep mindfully preserves lucidity. Like guiding ripening fruits to full maturity, calm focus strengthens clarity, attention, and subtle insight. Observing sensations and remaining present while drifting into sleep primes the mind for conscious dreaming. This method nurtures patience, awareness, and discernment, enhancing the ability to enter dreams intentionally, act with clarity, and respond thoughtfully within the dream environment while sustaining mindful presence.",

            "As you drift into sleep, maintain soft awareness of sensations and subtle cues. Gently notice changes and emerging dream signs without forcing control.<br><br>This practice fosters lucidity and attentive observation. Like harvesting fruits at the right time, subtle awareness ensures readiness to act consciously within dreams. Mindful presence strengthens discernment and clarity, allowing exploration with intention and subtle guidance. Each application of WBTB cultivates patience, focus, and inner growth, connecting waking reflection with dream navigation. Dreams become spaces for conscious action, insight, and subtle understanding, fostering clarity, mindful perception, and attentive awareness during sleep."
        ]
    },
    {
        "headings": [
            "Step 1: Question Things",
            "Step 2: Check Your Hands",
            "Step 3: Test Physical Laws",
            "Step 4: Confirm Your Memory",
            "Step 5: Anchor Yourself"
        ],
        "paras": [
            "A few times throughout the day, pause and deliberately question where you are and what you are doing. This simple act trains your mind to develop awareness instead of drifting through moments blindly. Lucid dreaming begins with learning to notice the small details we usually ignore.<br><br>When you challenge your surroundings, treat it as an exercise in clarity and self-control. You’re forming the habit of being present, honest with yourself, and attentive. Over time, this sharpens your ability to recognise the unusual signs that appear in dreams, helping you wake up within them.",

            "Hold your hands in front of you and study them carefully. In waking life they look stable and familiar, while in dreams they often appear distorted or inconsistent. This makes your hands one of the most reliable tools for recognising when you’re dreaming.<br><br>Looking closely at your hands strengthens your awareness and teaches your mind to seek truth instead of accepting illusions. Building this habit during the day helps you naturally do the same in dreams, giving you the clarity to realise you’re not bound by the moment you’re in.",

            "Try a simple physical test, like pinching your nose and attempting to breathe, or pushing a finger gently against your opposite palm. These checks behave normally in waking life but often act strangely in a dream, revealing the shift instantly.<br><br>By consistently testing physical laws, you train your mind to question the world rather than drift through it. This habit builds discipline and sharpens discernment, preparing you to recognise when something doesn’t align with the truth you know.",

            "Stop and reflect on how you got to the exact moment you’re in. Trace back your actions, choices, and surroundings. In dreams, the memory leading up to a scene is usually incomplete or makes no sense, making this one of the strongest reality checks.<br><br>This practice encourages deeper awareness and gratitude during the day, reminding you that every moment has a path behind it. When you form the habit of tracing that path, your mind becomes quicker at noticing when the pieces don’t add up.",

            "Take a moment to ground yourself by acknowledging the peace, clarity, and strength that come from walking with God. In dreams, spiritual grounding often feels distant or warped, making this a powerful cue that something is off.<br><br>Using spiritual awareness as a reality check strengthens both your discernment and your relationship with God. When you build this habit, your mind learns to recognise when you're in a false world, helping you stay awake, intentional, and guided even in your dreams."
        ]
    },
]
let currentTut = tutData[0];

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
    return timeString;
}
function getTime12(){
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
const currentDate = getCurrentDate();
const currentTime = getTime();

function changePage(pageIdx){
    document.querySelectorAll("div.home-bav-col").forEach((other) => {
        other.querySelectorAll("img")[0].classList.remove("invisible");
        other.querySelectorAll("img")[1].classList.add("invisible");
        other.querySelector(".home-bav-txt").classList.remove("home-bav-active");
    });
    document.querySelectorAll("div.home-bav-icon")[pageIdx].querySelector("img").classList.add("invisible");
    document.querySelectorAll("div.home-bav-icon")[pageIdx].querySelectorAll("img")[1].classList.remove("invisible");
    document.querySelectorAll(".home-bav-txt")[pageIdx].classList.add("home-bav-active");

    document.querySelectorAll(".page-holder").forEach(other => {
        other.style.display = "none";
    });
    document.querySelectorAll(".page-holder")[pageIdx].style.display = "block";
    window.scrollTo({
        top: 0,
    });
}

let params = new URLSearchParams(window.location.search);

function createHtml(){
    let homeBav = document.createElement("div");
    homeBav.classList.add("home-bav");
    homeBav.innerHTML = `
        <div class="home-bav-col">
            <div class="home-bav-icon">
                <img src="images/icons/home.png" class="home-bav-icon invisible" />
                <img src="images/icons/homeblue.png" class="home-bav-icon home-bav-active" />
            </div>
            <div class="home-bav-txt home-bav-active">Home</div>
        </div>
        <div class="home-bav-col">
            <div class="home-bav-icon">
                <img src="images/icons/bulb.png" class="home-bav-icon" />
                <img src="images/icons/bulbblue.png" class="home-bav-icon home-bav-active invisible" />
            </div>
            <div class="home-bav-txt">Techniques</div>
        </div>
        <div class="home-bav-col">
            <div class="home-bav-icon">
                <img src="images/icons/book.png" class="home-bav-icon" />
                <img src="images/icons/bookblue.png" class="home-bav-icon home-bav-active invisible" />
            </div>
            <div class="home-bav-txt">Journal</div>
        </div>
        <div class="home-bav-col">
            <div class="home-bav-icon">
                <img src="images/icons/chart.png" class="home-bav-icon" />
                <img src="images/icons/chartblue.png" class="home-bav-icon home-bav-active invisible" />
            </div>
            <div class="home-bav-txt">Analytics</div>
        </div>
        <div class="home-bav-col">
            <div class="home-bav-icon">
                <img src="images/icons/user.png" class="home-bav-icon" />
                <img src="images/icons/userblue.png" class="home-bav-icon home-bav-active invisible" />
            </div>
            <div class="home-bav-txt">Profile</div>
        </div>
    `;

    let activeIdx = 0;
    if(document.querySelector(".techniques")){
        activeIdx = 1;
    }
    if(document.querySelector(".journal")){
        activeIdx = 2;
    }
    if(document.querySelector(".analytics")){
        activeIdx = 3;
    }
    if(document.querySelector(".profile")){
        activeIdx = 4;
    }

    if(!document.querySelector(".login")){
        document.body.appendChild(homeBav);

        document.querySelectorAll(".home-bav-col").forEach((btn, idx) => {
            btn.addEventListener("click", () => {
                changePage(idx);
            });
        });
    }
}
createHtml();

async function getUserData(){
    let newUser = false;
    if(!localStorage.getItem("userId")){
        newUser = true;
        localStorage.setItem("userId", 0);
    }
    
    const dataToSend = { id: localStorage.getItem("userId"), newUser: newUser };
    try {
        const response = await fetch(url + '/api/get-user', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(dataToSend), 
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
            return;
        }

        const data = await response.json();
        const userData = data.userData;
        console.log(userData.id);
        if(newUser){
            localStorage.setItem("userId", userData.id);
        }

        if(!document.querySelector(".login")){

            //////////////////////// HOME ////////////////////////
                let greeting = "Good Morning";
                if(Number(currentTime.split(":")[0]) >= 12){
                    greeting = "Good Afternoon";
                } else if(Number(currentTime.split(":")[0]) >= 17){
                    greeting = "Good Evening";
                }
                document.querySelector(".home-title").innerHTML = greeting;
                if(!localStorage.getItem("lastDream") || localStorage.getItem("lastDream") != currentDate){
                    document.querySelector(".home-thank").style.display = "none";
                    document.querySelector(".home-cre-card").style.display = "flex";
                } else {
                    document.querySelector(".home-thank").style.display = "none";
                    document.querySelector(".home-cre-card").style.display = "none";
                }
    
                document.querySelector(".btn-forgot").addEventListener("click", () => {
                    localStorage.setItem("lastDream", currentDate);
                    document.querySelector(".home-cre-card").style.opacity = "0";
                    setTimeout(() => {
                        document.querySelector(".home-cre-card").style.display = "none";
                        document.querySelector(".home-thank").style.display = "flex";
                        setTimeout(() => {
                            document.querySelector(".home-thank").style.opacity = "1";
                            document.querySelector(".home-thank").style.pointerEvents = "auto";
                            document.querySelector(".home-thank").style.transform = "scale(1)";
                            setTimeout(() => {
                                document.querySelector(".home-thank").style.opacity = "0";
                                document.querySelector(".home-thank").style.pointerEvents = "none";
                                document.querySelector(".home-thank").style.transform = "scale(0)";
                                setTimeout(() => {
                                    document.querySelector(".home-thank").style.display = "none";
                                    document.querySelector(".home-cre-space").style.display = "block";
                                    setTimeout(() => {
                                        document.querySelector(".home-cre-space").style.height = "0px";
                                    }, 20);
                                }, 400);
                            }, 1500);
                        }, 50);
                    }, 300);
                });
            //////////////////////////////////////////////////////
    
            //////////////////////// HOME & TECHNIQUES ////////////////////////
                async function openTechnique(idx){
                    const dataToSend = { idx: idx };
                    try {
                        const response = await fetch(url + `/api/get-saved-techniques`, {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/json', 
                            },
                            body: JSON.stringify(dataToSend), 
                        });
    
                        if (!response.ok) {
                            const errorData = await response.json();
                            console.error('Error:', errorData.message);
                            return;
                        }
    
                        const data = await response.json();
                        if(data.status == "yes"){
                            document.querySelector(".btn-det-top").classList.add("btn-det-top-active");
                        } else {
                            document.querySelector(".btn-det-top").classList.remove("btn-det-top-active");
                        }
                        let currentData = techData[idx];
                        techIdx = idx;
                        document.querySelector(".det-icon img").src = "images/" + currentData.icon;
                        document.querySelector(".det-title").textContent = currentData.title;
                        document.querySelector(".det-para").textContent = currentData.description;
                        document.querySelectorAll(".det-info-diff span").forEach((circle, idx) => {
                            circle.classList.remove("det-info-active")
                            if(idx < currentData.difficulty) circle.classList.add("det-info-active");
                        });
                        document.querySelectorAll(".det-info-succ span").forEach((circle, idx) => {
                            circle.classList.remove("det-info-active")
                            if(idx < currentData.success) circle.classList.add("det-info-active");
                        });
                        document.querySelector(".det-txt").innerHTML = currentData.para;
                
                        document.querySelector(".det-container").style.opacity = "1";
                        document.querySelector(".det-container").style.pointerEvents = "auto";
                        document.querySelector(".det-container").style.right = "0";
                    } catch (error) {
                        console.error('Error posting data:', error);
                    }
                }
                document.querySelectorAll(".home-tech-arrow").forEach(arrow => {
                    arrow.addEventListener("click", () => {
                        let idx = arrow.id.split("-")[1];
                        openTechnique(idx);
                    });
                });
                document.querySelector(".det-back").addEventListener("click", () => {
                    document.querySelector(".det-container").style.opacity = "0";
                    document.querySelector(".det-container").style.pointerEvents = "none";
                    document.querySelector(".det-container").style.right = "-250px";
                });
                document.querySelector(".btn-det-top").addEventListener("click", () => {
                    async function saveTech(){
                        let goal;
                        if(document.querySelector(".btn-det-top").classList.contains("btn-det-top-active")){
                            goal = "no";
                            document.querySelector(".btn-det-top").classList.remove("btn-det-top-active");
                        } else {
                            goal = "yes";
                            document.querySelector(".btn-det-top").classList.add("btn-det-top-active");
                        }
                        const dataToSend = { idx: techIdx, goal: goal };
                        try {
                            const response = await fetch(url + `/api/save-technique`, {
                                method: 'POST',
                                credentials: 'include',
                                headers: {
                                    'Content-Type': 'application/json', 
                                },
                                body: JSON.stringify(dataToSend), 
                            });
    
                            if (!response.ok) {
                                const errorData = await response.json();
                                console.error('Error:', errorData.message);
                                return;
                            }
    
                            const data = await response.json();
                        } catch (error) {
                            console.error('Error posting data:', error);
                        }
                    }
                    saveTech();
                });
                document.querySelector(".btn-det").addEventListener("click", () => {
                    document.querySelector(".tut-container").style.opacity = "1";
                    document.querySelector(".tut-container").style.pointerEvents = "auto";
                });
    
                document.querySelector(".tut-back").addEventListener("click", () => {
                    document.querySelector(".tut-container").style.opacity = "0";
                    document.querySelector(".tut-container").style.pointerEvents = "none";
                });
                function changeTut(newIdx){
                    tutIdx = newIdx;
                    if(tutIdx == tutData.length) tutIdx = 0;
                    currentTut = tutData[tutIdx];
                    document.querySelectorAll(".tut-img img, .tut-head, .tut-para").forEach(el => {
                        el.classList.add("tut-inactive");
                    });
                    document.querySelectorAll(".tut-bar span").forEach(el => {
                        el.classList.remove("tut-bar-active");
                    });
    
                    setTimeout(() => {
                        document.querySelector(".tut-head").innerHTML = currentTut.headings[tutIdx];
                        document.querySelector(".tut-para").innerHTML = currentTut.paras[tutIdx];
                        setTimeout(() => {
                            //document.querySelectorAll(".tut-img img")[tutIdx].classList.remove("tut-inactive");
                            document.querySelectorAll(".tut-bar span")[tutIdx].classList.add("tut-bar-active");
                            document.querySelector(".tut-head").classList.remove("tut-inactive");
                            document.querySelector(".tut-para").classList.remove("tut-inactive");
                        }, 50);
                    }, 300);
                }
                document.querySelectorAll(".tut-bar span").forEach((circle, idx) => {
                    circle.addEventListener("click", () => {
                        changeTut(idx);
                    });
                });
                document.querySelector(".tut-forward").addEventListener("click", () => {
                    changeTut(tutIdx + 1);
                });
            //////////////////////////////////////////////////////////////////
    
            //////////////////////// JOURNAL ////////////////////////
                function updateEdits(reset, dream){
                    if(reset){
                        document.querySelector(".btn-edit-save").classList.add("btn-inactive");
                        document.getElementById("dreamDate").value = getCurrentDate();
                        document.querySelectorAll(".edit-change-col").forEach((col, colIdx) => {
                            col.querySelector(".edit-change-num").textContent = currentDate.split("/")[colIdx];
                            if(col.querySelector(".edit-change-num").textContent.slice(0, 1) == "0") col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(1);
                            if(col.querySelector(".edit-change-num").textContent.length == 4) col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(2);
                            document.getElementById("dreamDate").value = currentDate;
                            document.querySelector(".edit-date-txt").textContent = document.querySelectorAll(".edit-change-num")[0].textContent + " " + months[Number(document.querySelectorAll(".edit-change-num")[1].textContent - 1)] + " 20" + document.querySelectorAll(".edit-change-num")[2].textContent;
                        });
                        document.getElementById("dreamPara").value = "";
                        document.getElementById("dreamTitle").value = "";
                        document.getElementById("dreamType").value = "Lucid Dream";
                        document.querySelectorAll(".edit-ans-col").forEach(col => {
                            col.querySelectorAll(".edit-ans span").forEach((span, idx) => {
                                span.classList.remove("edit-span-active");
                                if(idx == 0) span.classList.add("edit-span-active");
                            });
                        });
                        document.getElementById("vivid").value = "3";
                        document.getElementById("length").value = "3";
                        document.getElementById("sleep").value = "3";
                        document.querySelectorAll(".edit-yn").forEach((btn, idx) => {
                            btn.classList.remove("edit-yn-active");
                            if(idx == 0) btn.classList.add("edit-yn-active");
                        });
                        document.querySelectorAll(".edit-tag-flex").forEach(flex => {
                            flex.style.marginTop = "0px";
                            flex.querySelectorAll(".edit-tag-tag").forEach(tag => {
                                flex.removeChild(tag);
                            });
                        });
                        document.getElementById("dreamPeople").value = "";
                        document.getElementById("dreamObjects").value = "";
                        document.querySelectorAll(".edit-toggle-option")[0].click();
                    } else {
                        document.querySelector(".btn-edit-save").classList.remove("btn-inactive");
                        document.getElementById("idInput").value = dream.id;
                        document.getElementById("dreamDate").value = dream.full_date;
                        document.querySelectorAll(".edit-change-col").forEach((col, colIdx) => {
                            col.querySelector(".edit-change-num").textContent = document.getElementById("dreamDate").value.split("/")[colIdx];
                            if(col.querySelector(".edit-change-num").textContent.slice(0, 1) == "0") col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(1);
                            if(col.querySelector(".edit-change-num").textContent.length == 4) col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(2);
                            document.querySelector(".edit-date-txt").textContent = document.querySelectorAll(".edit-change-num")[0].textContent + " " + months[Number(document.querySelectorAll(".edit-change-num")[1].textContent - 1)] + " 20" + document.querySelectorAll(".edit-change-num")[2].textContent;
                        });
                        document.getElementById("dreamPara").value = dream.para;
                        document.getElementById("dreamTitle").value = dream.title;
                        document.getElementById("dreamType").value = dream.dream_type;
                        document.querySelectorAll(".edit-ans-col").forEach(col => {
                            col.querySelectorAll(".edit-ans").forEach((ans, idx) => {
                                ans.querySelector("span").classList.remove("edit-span-active");
                                if(ans.innerHTML.slice(ans.innerHTML.lastIndexOf(">") + 2) == dream.dream_type || ans.innerHTML.slice(ans.innerHTML.lastIndexOf(">") + 2) == dream.dream_emotion){
                                    ans.querySelector("span").classList.add("edit-span-active");
                                } 
                            });
                        });
                        document.getElementById("vivid").value = dream.dream_vivid;
                        document.getElementById("length").value = dream.dream_length;
                        document.getElementById("sleep").value = dream.dream_quality;
                        document.querySelectorAll(".edit-yn").forEach((btn, idx) => {
                            btn.classList.remove("edit-yn-active");
                            if(idx == 0 && dream.dream_recurring == "no") btn.classList.add("edit-yn-active");
                            if(idx == 1 && dream.dream_recurring == "yes") btn.classList.add("edit-yn-active");
                        });
                        document.querySelectorAll(".edit-tag-flex").forEach(flex => {
                            flex.style.marginTop = "0px";
                            flex.querySelectorAll(".edit-tag-tag").forEach(tag => {
                                flex.removeChild(tag);
                            });
                        });
                        document.getElementById("dreamPeople").value = dream.dream_people;
                        document.getElementById("dreamObjects").value = dream.dream_objects;
                        let signs = [dream.dream_people, dream.dream_objects];
                        signs.forEach((sign, idx) => {
                            sign.split(",,").forEach(str => {
                                if(str != ""){
                                    let newTag = document.createElement("div");
                                    newTag.classList.add("edit-tag-tag");
                                    newTag.innerHTML = `<img src="images/icons/xmark.png" />${str}`;
                                    document.querySelectorAll(".edit-tag-flex")[idx].appendChild(newTag);
                                    document.querySelectorAll(".edit-tag-flex")[idx].style.marginTop = "20px";
    
                                    let newValue = "";
                                    document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").forEach((tag, tagIdx) => {
                                        if(newValue == ""){
                                            newValue = tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                        } else {
                                            newValue += ",," + tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                        }
                                    });
                                    document.querySelectorAll(".edit-tag-flex")[idx].querySelector("input").value = newValue;
    
                                    newTag.querySelector("img").addEventListener("click", () => {
                                        document.querySelectorAll(".edit-tag-flex")[idx].removeChild(newTag);
                                        if(document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").length == 0){
                                            document.querySelectorAll(".edit-tag-flex")[idx].style.marginTop = "0px";
                                        }
                                        let newValue = "";
                                        document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").forEach((tag, tagIdx) => {
                                            if(newValue == ""){
                                                newValue = tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                            } else {
                                                newValue += ",," + tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                            }
                                        });
                                        document.querySelectorAll(".edit-tag-flex")[idx].querySelector("input").value = newValue;
                                    });
                                }
                            });
                        });
                        document.querySelectorAll(".edit-toggle-option")[0].click();
                    }
                }
    
                function showDreams(array){
                    document.querySelector(".dre-col").innerHTML = "";
                    document.querySelectorAll(".dre-filter span").forEach(span => span.classList.remove("dre-filter-active"));
                    array.forEach(dream => {
                        let newWrapper = document.createElement("div");
                        newWrapper.id = dream.dream_type + "-" + dream.dream_recurring;
                        newWrapper.classList.add("dre-wrapper");
                        let dreActiveStr = "";
                        if(dream.is_saved == "yes") dreActiveStr = "dre-save-active";
                        let dreamPara = dream.para;
                        if(dreamPara.length > 120) dreamPara = dreamPara.slice(0, 117) + "..."; 
                        newWrapper.innerHTML = `
                            <div class="dre-edit">
                                <img src="images/icons/edit.png" />
                            </div>
                            <div class="dre-save ${dreActiveStr}">
                                <img src="images/icons/save.png" />
                            </div>
    
                            <div class="dre-date">${dream.full_date}, ${dream.full_time}</div>
                            <div class="dre-head">${dream.title}</div>
                            <div class="dre-tag">${dream.dream_emotion}</div>
                            <div class="dre-txt">${dreamPara}</div>
                        `;
                        document.querySelector(".dre-col").prepend(newWrapper);
    
                        newWrapper.addEventListener("click", () => {
                            let newModal = document.createElement("div");
                            newModal.classList.add("dre-modal");
                            newModal.innerHTML = `
                                <div class="dre-wrapper">
                                    <img src="images/icons/xmark.png" class="dre-xmark" />
    
                                    <div class="dre-date">${dream.full_date}, ${dream.full_time}</div>
                                    <div class="dre-head">${dream.title}</div>
                                    <div class="dre-tag">${dream.dream_emotion}</div>
                                    <div class="dre-txt">${dream.para}</div>
                                </div>
                            `;
                            document.body.appendChild(newModal);
                            setTimeout(() => {
                                newModal.style.opacity = "1";
                            }, 50);
                            
                            newModal.querySelector(".dre-xmark").addEventListener("click", () => {
                                newModal.style.opacity = "0";
                                newModal.style.pointerEvents = "none";
                            });
    
                            newModal.addEventListener("click", (e) => {
                                if(!newModal.querySelector(".dre-wrapper").contains(e.target)){
                                    newModal.style.opacity = "0";
                                    newModal.style.pointerEvents = "none";
                                } 
                            });
                        });
    
                        newWrapper.querySelector(".dre-save").addEventListener("click", (e) => {
                            e.stopPropagation();
                            let goal;
                            if(newWrapper.querySelector(".dre-save").classList.contains("dre-save-active")){
                                goal = "no";
                                newWrapper.querySelector(".dre-save").classList.remove("dre-save-active");
                            } else {
                                goal = "yes";
                                newWrapper.querySelector(".dre-save").classList.add("dre-save-active");
                            }
    
                            async function bookDream(){
                                const dataToSend = { goal: goal, id: dream.id };
                                try {
                                    const response = await fetch(url + `/api/book-dream`, {
                                        method: 'POST',
                                        credentials: 'include',
                                        headers: {
                                            'Content-Type': 'application/json', 
                                        },
                                        body: JSON.stringify(dataToSend), 
                                    });
    
                                    if (!response.ok) {
                                        const errorData = await response.json();
                                        console.error('Error:', errorData.message);
                                        return;
                                    }
    
                                    const data = await response.json();
                                } catch (error) {
                                    console.error('Error posting data:', error);
                                }
                            }
                            bookDream();
                        });
    
                        newWrapper.querySelector(".dre-edit").addEventListener("click", (e) => {
                            e.stopPropagation();
                            dreamEditing = true;
    
                            updateEdits(false, dream);
                            document.querySelector(".edit-container").style.opacity = "1";
                            document.querySelector(".edit-container").style.pointerEvents = "auto";
                            document.querySelector(".edit-container").style.right = "0px";
                        });
                    });
                }
    
                async function getDreams(){
                    try {
                        const response = await fetch(`${url}/api/get-dreams`, {
                            method: 'GET',
                            credentials: 'include'
                        });
                        const data = await response.json(); 
                        if(data.message == "success"){
                            let dreams = data.dreams;
                            if(dreams.length == 0){
                                document.querySelector(".jur-container").style.display = "flex";
                                document.querySelector(".dre-btn").style.display = "none";
                                setTimeout(() => {
                                    document.querySelector(".home-container").style.opacity = "1";
                                }, 50);
                            } else {
                                showDreams(dreams);
    
                                document.querySelector(".dre-btn").style.display = "flex";
                                document.querySelector(".dre-container").style.display = "flex";
                                setTimeout(() => {
                                    document.querySelector(".home-container").style.opacity = "1";
                                }, 50);
                            }
    
                            // Analytics logic
                            if(dreams.length < 3){
                                document.querySelector(".ana-emp").style.display = "flex";
                                document.querySelector(".ana-container").style.display = "none";
                                setTimeout(() => {
                                    document.querySelector(".home-container").style.opacity = "1";
                                }, 50);
                            } else {
                                document.querySelector(".ana-container").style.display = "flex";
                                document.querySelector(".ana-emp").style.display = "none";
                                document.querySelector(".ana-circ-head").textContent = dreams.length;
                                document.querySelectorAll(".ana-num").forEach((num, idx) => {
                                    let lucidDreams = dreams.filter(dream => dream.dream_type.toLowerCase() == "lucid dream");
                                    let normalDreams = dreams.filter(dream => dream.dream_type.toLowerCase() == "normal dream");
                                    let nightmares = dreams.filter(dream => dream.dream_type.toLowerCase() == "nightmare");
                                    if(idx == 0) num.textContent = Math.round((lucidDreams.length / dreams.length) * 100) + "%";
                                    if(idx == 1) num.textContent = Math.round((normalDreams.length / dreams.length) * 100) + "%";
                                    if(idx == 2) num.textContent = Math.round((nightmares.length / dreams.length) * 100) + "%";
                                    let lucidAngle = 360 * (lucidDreams.length / dreams.length);
                                    let normalAngle = 360 * (normalDreams.length / dreams.length);
                                    let nightmareAngle = 360 - lucidAngle - normalAngle;
                                    document.getElementById("circLucid").style.background = `
                                        conic-gradient(
                                            from 0deg,
                                            hsl(222, 100%, 38%) 0deg ${lucidAngle}deg,
                                            transparent ${lucidAngle + 1}deg 360deg 
                                        )
                                    `;
                                    document.getElementById("circNormal").style.background = `
                                        conic-gradient(
                                            from 0deg,
                                            hsl(222, 100%, 58%) 0deg ${normalAngle}deg,
                                            transparent ${normalAngle + 1}deg 360deg 
                                        )
                                    `;
                                    document.getElementById("circNormal").style.transform = `rotate(${lucidAngle}deg)`;
                                    document.getElementById("circNightmare").style.background = `
                                        conic-gradient(
                                            from 0deg,
                                            hsl(222, 100%, 78%) 0deg ${nightmareAngle}deg,
                                            transparent ${nightmareAngle + 1}deg 360deg 
                                        )
                                    `;
                                });
                                function makeBarChart(array, ul){
                                    array.forEach((num, idx) => {
                                        let rank = 0;
                                        array.forEach((other, otherIdx) => {
                                            if(otherIdx != idx && num[1] < other[1]){
                                                rank++;
                                            }
                                        });
                                        num[2] = rank;
                                    });
                                    let newEmotions = [];
                                    for(let i = 0; i < array.length; i++){
                                        array.forEach(emotion => {
                                            if(emotion[2] == i){
                                                newEmotions.push(emotion);
                                            }
                                        });
                                    }
                                    newEmotions.forEach((emotion, idx) => {
                                        if(idx < 3){
                                            let newLi = document.createElement("div");
                                            newLi.classList.add("ana-list-li");
                                            newLi.innerHTML = `
                                                <div class="ana-list-label">${emotion[0]}</div>
                                                <div class="ana-list-flex">
                                                    <div class="ana-list-fill"></div>
                                                    <div class="ana-list-num">${emotion[1]}</div>
                                                </div>
                                            `;
                                            ul.appendChild(newLi);
                                        }
                                    });
                                }
                                function fillCircles(){
                                    document.querySelectorAll(".ana-semi-out").forEach((cont, idx) => {
                                        let deg = Math.round(180 * circles[idx]);
                                        cont.querySelector(".semi-fill").style.background = `
                                            conic-gradient(
                                                from 90deg,
                                                var(--primary) 0deg ${deg}deg, 
                                                transparent ${deg + 1}deg 360deg 
                                            )
                                        `;
                                        cont.querySelector(".ana-stat-num").textContent = Math.round(circles[idx] * 100) + "%";
                                    });
                                }
                                let emotions = [];
                                let people = [];
                                let circles = [0, 0, 0, 0]; // recurring, vivid, lucidity, 
                                dreams.forEach(dream => {
                                    let newEmotion = [dream.dream_emotion, 0, 0];
                                    let isValid = true;
                                    emotions.forEach(emotion => {
                                        if(emotion[0] == dream.dream_emotion){
                                            isValid = false;
                                        }
                                    });
                                    if(isValid){
                                        emotions.push(newEmotion);
                                    }
                                    emotions.forEach((emotion, idx) => {
                                        if(dream.dream_emotion == emotion[0]){
                                            emotion[1]++;
                                        }
                                    });  
    
                                    if(dream.dream_people != ""){
                                        dream.dream_people.split(",,").forEach(person => {
                                            let newPerson = [person, 0, 0];
                                            let isPersonValid = true;
                                            people.forEach(existing => {
                                                if(existing[0] == dream.person){
                                                    isPersonValid = false;
                                                }
                                            });
                                            if(isPersonValid){
                                                people.push(newPerson);
                                            }
                                        });
                                    }
                                    people.forEach(existing => {
                                        dream.dream_people.split(",,").forEach(person => {
                                            if(existing[0] == person){
                                                existing[1]++;
                                            }
                                        });
                                    });
    
                                    if(dream.dream_recurring == "yes") circles[0]++;
                                    circles[1] += (dream.dream_vivid / 5);
                                    if(dream.dream_type == "Lucid Dream") circles[2]++;
                                    circles[3] += (dream.dream_quality / 5);
                                });
                                circles[0] = (circles[0] / dreams.length);
                                circles[1] = (circles[1] / dreams.length);
                                circles[2] = (circles[2] / dreams.length);
                                circles[3] = (circles[3] / dreams.length);
                                makeBarChart(emotions, document.getElementById("emotionsUl"));
                                makeBarChart(people, document.getElementById("peopleUl"));
                                fillCircles();
                               
                                setTimeout(() => {
                                    document.querySelector(".home-container").style.opacity = "1";
                                }, 50);
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
                getDreams();
    
                document.querySelector(".btn-jur").addEventListener("click", () => {
                    dreamEditing = false;
                    document.querySelector(".edit-container").style.opacity = "1";
                    document.querySelector(".edit-container").style.pointerEvents = "auto";
                    document.querySelector(".edit-container").style.right = "0px";
                });
                document.querySelector(".dre-btn").addEventListener("click", () => {
                    dreamEditing = false;
                    document.querySelector(".edit-container").style.opacity = "1";
                    document.querySelector(".edit-container").style.pointerEvents = "auto";
                    document.querySelector(".edit-container").style.right = "0px";
                });
                document.querySelectorAll(".dre-filter span").forEach((span, idx) => {
                    span.addEventListener("click", () => {
                        if(span.classList.contains("dre-filter-active")){
                            span.classList.remove("dre-filter-active");
                            document.querySelectorAll(".dre-wrapper").forEach(wrapper => {
                                wrapper.style.display = "flex";
                            });
                        } else {
                            document.querySelectorAll(".dre-filter span").forEach(other => {
                                other.classList.remove("dre-filter-active");
                            });
                            span.classList.add("dre-filter-active");
    
                            document.querySelectorAll(".dre-wrapper").forEach(wrapper => {
                                wrapper.style.display = "flex";
    
                                if(idx == 0){
                                    if(wrapper.id.split("-")[0] != "Lucid Dream") wrapper.style.display = "none";
                                } else if(idx == 1){
                                    if(wrapper.id.split("-")[0] != "Normal Dream") wrapper.style.display = "none";
                                } else if(idx == 2){
                                    if(wrapper.id.split("-")[0] != "Nightmare") wrapper.style.display = "none";
                                } else if(idx == 3){
                                    if(!wrapper.querySelector(".dre-save").classList.contains("dre-save-active")) wrapper.style.display = "none";
                                } else if(idx == 4){
                                    if(wrapper.id.split("-")[1] != "yes") wrapper.style.display = "none";
                                }
                            });
                        }
                    });
                });
    
                document.querySelector(".edit-back").addEventListener("click", () => {
                    updateEdits(true);
                    document.querySelector(".edit-container").style.opacity = "0";
                    document.querySelector(".edit-container").style.pointerEvents = "none";
                    document.querySelector(".edit-container").style.right = "-255px";
                });
                document.querySelectorAll(".edit-toggle-option").forEach((option, idx) => {
                    option.addEventListener("click", () => {
                        let toggleOptions = ["left", "mid", "right"];
                        document.querySelector(".edit-toggle span").classList.remove("edit-toggle-left");
                        document.querySelector(".edit-toggle span").classList.remove("edit-toggle-mid");
                        document.querySelector(".edit-toggle span").classList.remove("edit-toggle-right");
                        document.querySelector(".edit-toggle span").classList.add("edit-toggle-" + toggleOptions[idx]);
                        document.querySelectorAll(".edit-content").forEach(cont => {
                            cont.style.opacity = "0";
                            setTimeout(() => {
                                cont.style.display = "none";
                                document.querySelectorAll(".edit-content")[idx].style.display = "flex";
                                setTimeout(() => {
                                    document.querySelectorAll(".edit-content")[idx].style.opacity = "1";
                                }, 30);
                            }, 300);
                        });
                    });
                });
                document.querySelectorAll(".edit-ans-col").forEach(col => {
                    col.querySelectorAll(".edit-ans").forEach(ans => {
                        ans.addEventListener("click", () => {
                            col.querySelectorAll(".edit-ans").forEach(other => {
                                other.querySelector("span").classList.remove("edit-span-active");
                            });
                            ans.querySelector("span").classList.add("edit-span-active");
                            col.querySelector("input").value = ans.innerHTML.slice(ans.innerHTML.lastIndexOf(">") + 2);
                        });
                    });
                });
                document.querySelector(".edit-date-wrapper").addEventListener("click", (e) => {
                    if(!document.querySelector(".edit-change").contains(e.target)){
                        if(document.querySelector(".edit-date-chev").style.transform == "rotate(-90deg)"){
                            document.querySelector(".edit-change").style.opacity = "0";
                            document.querySelector(".edit-change").style.pointerEvents = "none";
                            document.querySelector(".edit-date-chev").style.transform = "rotate(90deg)";
                        } else {
                            document.querySelector(".edit-change").style.opacity = "1";
                            document.querySelector(".edit-change").style.pointerEvents = "auto";
                            document.querySelector(".edit-date-chev").style.transform = "rotate(-90deg)";
                        }
                    }
                });
                document.getElementById("dreamDate").value = getCurrentDate();
                document.querySelectorAll(".edit-change-col").forEach((col, colIdx) => {
                    col.querySelector(".edit-change-num").textContent = currentDate.split("/")[colIdx];
                    if(col.querySelector(".edit-change-num").textContent.slice(0, 1) == "0") col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(1);
                    if(col.querySelector(".edit-change-num").textContent.length == 4) col.querySelector(".edit-change-num").textContent = col.querySelector(".edit-change-num").textContent.slice(2);
                    document.getElementById("dreamDate").value = currentDate;
                    document.querySelector(".edit-date-txt").textContent = document.querySelectorAll(".edit-change-num")[0].textContent + " " + months[Number(document.querySelectorAll(".edit-change-num")[1].textContent - 1)] + " 20" + document.querySelectorAll(".edit-change-num")[2].textContent;
                    col.querySelectorAll(".edit-change-chev").forEach((chev, idx) => {
                        chev.addEventListener("click", () => {
                            if(idx == 0){
                                col.querySelector(".edit-change-num").textContent = Number(col.querySelector(".edit-change-num").textContent) + 1;
                                if(Number(col.querySelector(".edit-change-num").textContent) > 31 && colIdx == 0) col.querySelector(".edit-change-num").textContent = "1";
                                if(Number(col.querySelector(".edit-change-num").textContent) > 12 && colIdx == 1) col.querySelector(".edit-change-num").textContent = "1";
                            } else {
                                col.querySelector(".edit-change-num").textContent = Number(col.querySelector(".edit-change-num").textContent) - 1;
                                if(Number(col.querySelector(".edit-change-num").textContent) < 1 && colIdx == 0) col.querySelector(".edit-change-num").textContent = "31";
                                if(Number(col.querySelector(".edit-change-num").textContent) < 1 && colIdx == 1) col.querySelector(".edit-change-num").textContent = "12";
                                if(Number(col.querySelector(".edit-change-num").textContent) < 10 && colIdx == 2) col.querySelector(".edit-change-num").textContent = "10";
                            }
                            document.getElementById("dreamDate").value = document.querySelectorAll(".edit-change-num")[0].textContent.padStart(2, "0") + "/" + document.querySelectorAll(".edit-change-num")[1].textContent.padStart(2, "0") + "/20" + document.querySelectorAll(".edit-change-num")[2].textContent;
                        });
                    });
                });
                document.querySelector(".btn-change-save").addEventListener("click", () => {
                    document.querySelector(".edit-change").style.opacity = "0";
                    document.querySelector(".edit-change").style.pointerEvents = "none";
                    document.querySelector(".edit-date-chev").style.transform = "rotate(90deg)";
    
                    document.querySelector(".edit-date-txt").textContent = document.querySelectorAll(".edit-change-num")[0].textContent + " " + months[Number(document.querySelectorAll(".edit-change-num")[1].textContent - 1)] + " 20" + document.querySelectorAll(".edit-change-num")[2].textContent;
                });
                document.querySelector(".btn-change-cancel").addEventListener("click", () => {
                    document.querySelector(".edit-change").style.opacity = "0";
                    document.querySelector(".edit-change").style.pointerEvents = "none";
                    document.querySelector(".edit-date-chev").style.transform = "rotate(90deg)";
                });
                document.querySelectorAll(".btn-tag").forEach((btn, idx) => {
                    btn.addEventListener("click", () => {
                        let input = document.querySelectorAll(".edit-tag-input input")[idx];
                        if(input.value != ""){
                            let newTag = document.createElement("div");
                            newTag.classList.add("edit-tag-tag");
                            newTag.innerHTML = `<img src="images/icons/xmark.png" />${input.value}`;
                            document.querySelectorAll(".edit-tag-flex")[idx].appendChild(newTag);
                            document.querySelectorAll(".edit-tag-flex")[idx].style.marginTop = "20px";
    
                            let newValue = "";
                            document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").forEach((tag, tagIdx) => {
                                if(newValue == ""){
                                    newValue = tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                } else {
                                    newValue += ",," + tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                }
                            });
                            document.querySelectorAll(".edit-tag-flex")[idx].querySelector("input").value = newValue;
    
                            newTag.querySelector("img").addEventListener("click", () => {
                                document.querySelectorAll(".edit-tag-flex")[idx].removeChild(newTag);
                                if(document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").length == 0){
                                    document.querySelectorAll(".edit-tag-flex")[idx].style.marginTop = "0px";
                                }
                                let newValue = "";
                                document.querySelectorAll(".edit-tag-flex")[idx].querySelectorAll(".edit-tag-tag").forEach((tag, tagIdx) => {
                                    if(newValue == ""){
                                        newValue = tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                    } else {
                                        newValue += ",," + tag.innerHTML.slice(tag.innerHTML.lastIndexOf(">") + 1);
                                    }
                                });
                                document.querySelectorAll(".edit-tag-flex")[idx].querySelector("input").value = newValue;
                            });
                            input.value = "";
                        }
                    });
                });
                document.querySelectorAll(".edit-yn-flex").forEach(flex => {
                    flex.querySelectorAll(".edit-yn").forEach(el => {
                        el.addEventListener("click", () => {
                            flex.querySelectorAll(".edit-yn").forEach(other => {
                                other.classList.remove("edit-yn-active");
                            });
                            el.classList.add("edit-yn-active");
                        });
                    });
                });
    
                function checkStory(){
                    if(document.getElementById("dreamTitle").value != "" && document.getElementById("dreamPara").value != ""){
                        document.querySelector(".btn-edit-save").classList.remove("btn-inactive");
                    } else {
                        document.querySelector(".btn-edit-save").classList.add("btn-inactive");
                    }
                }
                document.getElementById("dreamTitle").addEventListener("input", checkStory);
                document.getElementById("dreamPara").addEventListener("input", checkStory);
                document.querySelector(".btn-edit-save").addEventListener("click", () => {
                    async function saveDream(){
                        const dreamData = {
                            "title": document.getElementById("dreamTitle").value,
                            "para": document.getElementById("dreamPara").value,
                            "date": document.getElementById("dreamDate").value,
                            "type": document.getElementById("dreamType").value,
                            "vivid": document.getElementById("vivid").value,
                            "length": document.getElementById("length").value,
                            "sleep": document.getElementById("sleep").value,
                            "recurring": document.querySelector(".edit-yn-active").id.split("-")[1],
                            "emotion": document.getElementById("dreamEmotion").value,
                            "people": document.getElementById("dreamPeople").value,
                            "objects": document.getElementById("dreamObjects").value
                        }
                        if(dreamEditing) dreamData.id = document.getElementById("idInput").value;
                        const dataToSend = { dreamData: dreamData };
                        try {
                            const response = await fetch(url + `/api/save-dream`, {
                                method: 'POST',
                                credentials: 'include',
                                headers: {
                                    'Content-Type': 'application/json', 
                                },
                                body: JSON.stringify(dataToSend), 
                            });
    
                            if (!response.ok) {
                                const errorData = await response.json();
                                console.error('Error:', errorData.message);
                                return;
                            }
    
                            const data = await response.json();
                            if(data.message == "success"){
                                if(!dreamEditing){
                                    localStorage.setItem("lastDream", dreamData.date);
                                }
    
                                showDreams(data.dreams);
    
                                document.querySelector(".jur-container").style.display = "none";
                                document.querySelector(".dre-btn").style.display = "flex";
                                document.querySelector(".dre-container").style.display = "flex";
                                document.querySelector(".edit-container").style.opacity = "0";
                                document.querySelector(".edit-container").style.pointerEvents = "none";
                                document.querySelector(".edit-container").style.right = "-250px";
                                updateEdits(true);
                            }
                        } catch (error) {
                            console.error('Error posting data:', error);
                        }
                    }
    
                    saveDream();
                });
            ////////////////////////////////////////////////////////
    
            //////////////////////// ANALYTICS ////////////////////////
                // most of logic is in journal > getDreams()
    
                document.querySelectorAll(".ana-semi-holder").forEach(holder => {
                    holder.addEventListener("wheel", (e) => {
                        e.preventDefault();
                    });
                    holder.addEventListener('scroll', () => {
                        holder.scrollTop = 0;
                        holder.scrollLeft = 0;
                    });
                });
    
                document.getElementById("analyticsHolder").classList.add("page-holder-inactive");
                setTimeout(() => {
                    document.querySelectorAll(".ana-left-col .ana-wrapper").forEach(wrapper => {
                        wrapper.style.height = document.querySelectorAll(".ana-wrapper")[5].clientHeight + "px";
                        console.log(document.querySelectorAll(".ana-wrapper")[5].clientHeight + "px");
                    });
                    document.getElementById("analyticsHolder").classList.remove("page-holder-inactive");
                }, 1000);
            ///////////////////////////////////////////////////////////
    
            //////////////////////// PROFILE ////////////////////////
                if(userData.name == "n/a"){
                    document.getElementById("logoutOption").style.display = "none";
                } else {
                    document.getElementById("createAccountOption").style.display = "none";
                    document.getElementById("loginOption").style.display = "none";
                }
    
                document.getElementById("logoutOption").addEventListener("click", () => {
                    async function logout(){
                        try {
                            const response = await fetch(`${url}/api/logout`, {
                                method: 'GET',
                                credentials: 'include'
                            });
                            const data = await response.json(); 
                            if(data.message == "success"){
                                localStorage.clear();
                                window.location.href = "/login.html?start=login";
                            }
                        } catch (error) {
                            console.error('Error fetching data:', error);
                        }
                    }
                    logout();
                });
    
                document.getElementById("deleteOption").addEventListener("click", () => {
                    document.getElementById("deleteDataModal").style.opacity = "1";
                    document.getElementById("deleteDataModal").style.pointerEvents = "auto";
                });
    
                document.getElementById("deleteDataBtn").addEventListener("click", () => {
                    async function deleteData(){
                        try {
                            const response = await fetch(`${url}/api/delete-data`, {
                                method: 'GET',
                                credentials: 'include'
                            });
                            const data = await response.json();
                            if(data.message == "success"){
                                localStorage.clear();
                                window.location.href = "/login.html?start=login";
                            } 
                        } catch (error) {
                            console.error('Error fetching data:', error);
                        }
                    }
                    deleteData();
                });
            /////////////////////////////////////////////////////////
        }
        
        if(document.querySelector(".login")){
            if(params.get("start") == "login"){
                document.getElementById("signForm").style.display = "none";
                document.getElementById("signForm").style.opacity = "0";
                document.getElementById("logForm").style.display = "block";
                document.getElementById("logForm").style.opacity = "1";
            }

            document.getElementById("signForm").addEventListener("submit", async (e) => {
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                const res = await fetch(url + `/api/signup`, {
                    method: "POST",
                    credentials: 'include',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const responseData = await res.json();
                if(responseData.message == "success"){
                    localStorage.clear();
                    localStorage.setItem("userId", responseData.id);
                    window.location.href = "/";
                } else if(responseData.message == "emailtaken"){
                    document.getElementById("signForm").querySelector(".error-email").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("signForm").querySelector(".error-email").style.display = "block";
                    }, 2000);
                } else if(responseData.message == "servererror"){
                    document.getElementById("signForm").querySelector(".error-server").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("signForm").querySelector(".error-server").style.display = "block";
                    }, 2000);
                }
            });
            document.getElementById("logForm").addEventListener("submit", async (e) => {
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                const res = await fetch(url + `/api/login`, {
                    method: "POST",
                    credentials: 'include',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const responseData = await res.json();
                if(responseData.message == "success"){
                    localStorage.clear();
                    localStorage.setItem("userId", responseData.id);
                    window.location.href = "/";
                } else if(responseData.message == "nouser"){
                    document.getElementById("logForm").querySelector(".error-user").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("logForm").querySelector(".error-user").style.display = "none";
                    }, 2000);
                } else if(responseData.message == "passworderror"){
                    document.getElementById("logForm").querySelector(".error-password").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("logForm").querySelector(".error-password").style.display = "none";
                    }, 2000);
                } else if(responseData.message == "servererror"){
                    document.getElementById("logForm").querySelector(".error-server").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("logForm").querySelector(".error-server").style.display = "none";
                    }, 2000);
                }
            });

            document.getElementById("switchLogin").addEventListener("click", () => {
                document.getElementById("signForm").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("signForm").style.display = "none";
                    document.getElementById("logForm").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("logForm").style.opacity = "1";
                    }, 30);
                }, 200);
            });

            document.getElementById("resetPassword").addEventListener("click", () => {
                document.getElementById("logForm").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("logForm").style.display = "none";
                    document.getElementById("sendForm").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("sendForm").style.opacity = "1";
                    }, 30);
                }, 200);
            });
            document.getElementById("sendForm").addEventListener("submit", async (e) => {
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                const res = await fetch(url + "/api/send-code", {
                    method: "POST",
                    credentials: 'include',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const responseData = await res.json();
                if(responseData.message == "success") {
                    document.getElementById("sendForm").style.opacity = "0";
                    setTimeout(() => {
                        document.getElementById("sendForm").style.display = "none";
                        document.getElementById("verForm").style.display = "block";
                        setTimeout(() => {
                            document.getElementById("verForm").style.opacity = "1";
                        }, 30);
                    }, 200);
                } else if(responseData.message == "noemail") {
                    document.getElementById("sendError").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("sendError").style.display = "none";
                    }, 2000);
                }
            });
            document.getElementById("verForm").addEventListener("submit", async (e) => {
                e.preventDefault(); 
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());

                const res = await fetch(url + "/api/verify", {
                    method: "POST",
                    credentials: 'include',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const responseData = await res.json();
                if(responseData.message == "success") {
                    window.location.href = "/";
                } else if(responseData.message == "codeerror") {
                    document.getElementById("codeError").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("codeError").style.display = "none";
                    }, 2000);
                }
            });
        }

        /*///////// ELEMENT SPECIFIC //////////*/
        if(document.querySelector(".home-acc-icon")){
            document.querySelector(".home-acc-icon").innerHTML = `
                <img src="images/icons/noti2.png" class="home-acc-icon" />
                <div class="noti-red"></div>
                <div class="noti-drop">
                    <div class="noti-top">
                        <div class="noti-head">Notifications</div>
                    </div>
        
                    <div class="noti-ul">
                        <!-- 
                        <div class="noti-li">
                            <div class="noti-dot"></div>
                            <div class="noti-col">
                                <div class="noti-txt">Your password has been successfully changed.</div>
                                <div class="noti-date">Dec 25, 2025 at 08:32am</div>
                            </div>
                            <i class="fa-solid fa-lock noti-icon"></i>
                        </div>
                        <div class="noti-li">
                            <div class="noti-dot"></div>
                            <div class="noti-col">
                                <div class="noti-txt">You have been assigned to a new job.</div>
                                <div class="noti-date">Dec 12, 2025 at 11:32am</div>
                            </div>
                            <i class="fa-solid fa-location-dot noti-icon"></i>
                        </div>
                        <div class="noti-li" style="border-bottom: 0; padding-bottom: 0;">
                            <div class="noti-dot"></div>
                            <div class="noti-col">
                                <div class="noti-txt">Your monthly report has been updated.</div>
                                <div class="noti-date">Dec 01, 2025 at 04:14pm</div>
                            </div>
                            <i class="fa-solid fa-chart-line noti-icon"></i>
                        </div>
                        -->
                        <div class="emp-wrapper" id="notiEmpty" style="margin-top: 0px;">
                            <div class="emp-head">No Notifications</div>
                            <div class="emp-para">We couldn't find any notifications<br> for you. Try again later.</div>
                        </div>
                    </div>
                </div>
            `;

            let newNotis = 0;
            let anyNotis = 0;
            if(!userData.notifications) userData.notifications = [];
            userData.notifications.forEach((noti, idx) => {
                let newNoti = document.createElement("div");
                newNoti.classList.add("noti-li");
                let readStr = "style='display: none;'";
                if(noti.status == "unread"){
                    readStr = "";
                    newNotis++;
                }
                let iconStr;
                if(noti.type == "job"){
                    iconStr = "fa-solid fa-location-dot";
                } else if(noti.type == "finished"){
                    iconStr = "fa-solid fa-flag-checkered";
                } else if(noti.type == "password"){
                    iconStr = "padlock.png";
                }
                newNoti.innerHTML = `
                    <div class="noti-dot" ${readStr}></div>
                    <div class="noti-col">
                        <div class="noti-txt">${noti.title}</div>
                        <div class="noti-date">${noti.full_date}</div>
                    </div>
                    <div class="noti-icon">
                        <img src="images/icons/${iconStr}" />
                    </div>
                `;
                if(idx == userData.notifications.length - 1){
                    newNoti.style.paddingBottom = "0px";
                    newNoti.style.borderBottom = "0px";
                }
                document.querySelector(".noti-ul").appendChild(newNoti);
                anyNotis++;
            });
            if(newNotis > 0) {
                document.querySelector(".noti-red").style.display = "flex";
                document.querySelector(".noti-red").textContent = newNotis;
            }
            if(anyNotis == 0){
                document.getElementById("notiEmpty").style.display = "block";
            } else {
                document.getElementById("notiEmpty").style.display = "none";
            }

            document.querySelector(".home-acc-icon").addEventListener("click", () => {
                document.querySelector(".noti-drop").style.opacity = "1";
                document.querySelector(".noti-drop").style.pointerEvents = "auto";

                async function markRead(){
                    try {
                        const response = await fetch(`${url}/api/mark-read`, {
                            method: 'GET',
                            credentials: 'include'
                        });
                        const data = await response.json(); 
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
                markRead();
            });
            document.addEventListener("click", (e) => {
                if(!document.querySelector(".home-acc-icon").contains(e.target)){
                    document.querySelector(".noti-drop").style.opacity = "0";
                    document.querySelector(".noti-drop").style.pointerEvents = "none";
                }
            });
        }

        document.querySelectorAll(".all-modal").forEach(modal => {
            modal.addEventListener("click", (e) => {
                if(!modal.querySelector(".modal-wrapper").contains(e.target)){
                    modal.style.opacity = "0";
                    modal.style.pointerEvents = "none";
                }
            });
            if(modal.querySelector(".close-modal")){
                modal.querySelector(".close-modal").addEventListener("click", () => {
                    modal.style.opacity = "0";
                    modal.style.pointerEvents = "none";
                });
            }
        });
        setTimeout(() => {
            document.querySelectorAll(".home-container, .log-container").forEach(cont => {
                cont.style.opacity = "1";
                cont.style.transform = "translateY(0px)";    
            });
        }, 150);
        /*/////////////////////////////////////*/


    } catch (error) {
        console.error('Error posting data:', error);
    }
}
getUserData();