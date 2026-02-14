// Typewriter
const text = "Happy Valentine’s Day, Baby Girl🥰🌸🤍";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

function startExperience() {
    document.querySelector(".intro").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const music = document.getElementById("bg-music");
    music.volume = 0;
    music.play();

    let fadeAudio = setInterval(() => {
        if (music.volume < 0.5) {
            music.volume += 0.02;
        } else {
            clearInterval(fadeAudio);
        }
    }, 200);

    typeLetter(); // 👈 this starts typing
}
// Countdown since Dec 8 2025
const startDate = new Date("January 11, 2026 00:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerHTML = days + " days together 🤍";
}, 1000);

function showSecret() {
    document.getElementById("secretMessage").innerHTML =
    "I don’t know what the future holds, but I know I am grateful you are part of my present. And that alone feels like a blessing 🤍";
}
const letterText = `January 11th, 2026 🤍
The day something soft quietly began.If I’m being honest, I didn’t expect anything serious. I didn’t expect you. I didn’t expect to meet anyone. I didn’t expect the consistency. And I definitely didn’t expect my heart to soften the way it did.
But here we are.It all started as a friendly conversation, but it has grown into something beautiful 🌷.
What I admire most about you is how you let me love you. You’ve shown me your true self no shows, no nothing just the real you. You’re genuine. You care without fault. The kind of care that doesn’t keep score. The kind that stays. The kind that makes a guy lose his composure.
I’m always going to be here to support you through your difficult times and your good times. I’ll be here. You’ve made conversations so easy. I don’t have to worry about anything. If we have a problem, we talk about it. And if I’ve done anything to upset you, I’m sorry. I haven’t felt like this in a very long time.
You’ve made me feel loved, and that means a lot to me, truly 🤍.
I admire everything about you your heart, your patience, your effort, your steadiness. In a world where so many things are temporary, you are intentional. You show up. You try. You mean what you say.
And that is rare.
I don’t take that lightly.
My prayer for you is that God protects you in ways you cannot see 🕊. May your heart always remain soft but strong. May your steps be guided. May your efforts be rewarded. May peace surround you. May you never doubt your worth. May everything you are working towards align beautifully for you.
And if I am meant to continue walking beside you, I pray I do so gently — as someone who adds light to your life, not weight.
From admirers… to lovers 🤭🤍
Happy Valentine’s Day, baby girl 💌✨”`;

let letterIndex = 0;

const typeSound = document.getElementById("type-sound");

function typeLetter() {
    if (letterIndex < letterText.length) {
        const char = letterText.charAt(letterIndex);
        document.getElementById("typedLetter").innerHTML += char;
        letterIndex++;

        // play sound for each character (optional: skip spaces)
        if (char !== " " && char !== "\n") {
            typeSound.currentTime = 0;
            typeSound.play();
        }

        // pause slightly after paragraphs
        let delay = 15; // fast typing
        if (char === "\n") delay = 150; 

        setTimeout(typeLetter, delay);
    } else {
        const gallery = document.getElementById("gallery");
        gallery.style.display = "block";
        setTimeout(() => gallery.classList.add("show"), 100);
    }
}
// Floating hearts
function createHearts() {
    const heartsContainer = document.getElementById("hearts");
    for (let i = 0; i < 15; i++) { // number of hearts
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw"; // random horizontal
        heart.style.animationDuration = 5 + Math.random() * 5 + "s"; // speed variation
        heart.style.width = 15 + Math.random() * 15 + "px";
        heart.style.height = heart.style.width;
        heartsContainer.appendChild(heart);
    }
}

createHearts();

