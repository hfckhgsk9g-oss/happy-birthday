// ============================================
// HAPPY BIRTHDAY WEBSITE
// Version 1
// Part 1
// ============================================

// -------------------------------
// ELEMENTS
// -------------------------------

const screens = {
    loader: document.getElementById("loader"),
    welcome: document.getElementById("welcome"),
    story: document.getElementById("story"),
    countdown: document.getElementById("countdown"),
    intro: document.getElementById("intro"),
    letter: document.getElementById("letter"),
    celebration: document.getElementById("celebration"),
    video: document.getElementById("videoScreen"),
    ending: document.getElementById("ending")
};

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

const countNumber = document.getElementById("countNumber");
const introText = document.getElementById("introText");
const typingText = document.getElementById("typingText");

const birthdayVideo = document.getElementById("birthdayVideo");

// -------------------------------
// LETTER MESSAGE
// -------------------------------

const birthdayMessage = `Dear Dr. Amna Anwar ❤️

Today isn't just another day.

Today is the day Allah blessed this world with someone truly special.

On your birthday, I pray that Allah fills your life with endless happiness, peace, good health, success and beautiful memories.

May your smile always remain as bright as it is today.

May every dream in your heart come true.

Thank you for being such a wonderful person.

Happy Birthday once again.

May Allah always protect you and bless every step of your journey.

Forever Yours,

Aflatoon 😎 ❤️`;


// -------------------------------
// SHOW SCREEN
// -------------------------------

function showScreen(screenName){

    Object.values(screens).forEach(screen=>{

        screen.classList.remove("active");

    });

    screens[screenName].classList.add("active");

}



// -------------------------------
// APP START
// -------------------------------

window.onload = ()=>{

    showScreen("loader");

    setTimeout(()=>{

        showScreen("welcome");

    },2500);

};



// -------------------------------
// START BUTTON
// -------------------------------

startBtn.addEventListener("click",()=>{

    showStory();

});



// -------------------------------
// STORY SCREEN
// -------------------------------

function showStory(){

    showScreen("story");

    setTimeout(()=>{

        showCountdown();

    },3000);

}



// -------------------------------
// COUNTDOWN
// -------------------------------

function showCountdown(){

    showScreen("countdown");

    let number = 3;

    countNumber.innerHTML = number;

    const timer = setInterval(()=>{

        number--;

        if(number>0){

            countNumber.innerHTML = number;

        }else{

            clearInterval(timer);

            showIntro();

        }

    },1000);

}
// ============================================
// Version 1
// Part 2
// ============================================

// -------------------------------
// CINEMATIC INTRO
// -------------------------------

const introLines = [

    "Close your eyes...",

    "And make a wish...",

    "Because today...",

    "...is all about you."

];

function showIntro(){

    showScreen("intro");

    let index = 0;

    function nextLine(){

        if(index >= introLines.length){

            setTimeout(()=>{

                showLetter();

            },1200);

            return;

        }

        introText.style.opacity = "0";

        setTimeout(()=>{

            introText.innerHTML = introLines[index];

            introText.style.opacity = "1";

            index++;

            setTimeout(nextLine,2200);

        },500);

    }

    nextLine();

}



// -------------------------------
// LETTER
// -------------------------------

function showLetter(){

    showScreen("letter");

    typingText.innerHTML = "";

    continueBtn.style.display = "none";

    let index = 0;

    const speed = 35;

    const typing = setInterval(()=>{

        typingText.innerHTML += birthdayMessage.charAt(index);

        index++;

        if(index >= birthdayMessage.length){

            clearInterval(typing);

            setTimeout(()=>{

                continueBtn.style.display = "inline-block";

                continueBtn.animate([

                    {

                        opacity:0,

                        transform:"translateY(20px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0px)"

                    }

                ],{

                    duration:800,

                    fill:"forwards",

                    easing:"ease-out"

                });

            },1200);

        }

    },speed);

}



// -------------------------------
// BLINKING CURSOR
// -------------------------------

setInterval(()=>{

    const cursor = document.getElementById("cursor");

    if(cursor){

        cursor.style.visibility =

        cursor.style.visibility=="hidden"

        ? "visible"

        : "hidden";

    }

},500);



// -------------------------------
// CONTINUE BUTTON
// -------------------------------

continueBtn.addEventListener("click",()=>{

    showCelebration();

});
// ============================================
// Version 1
// Part 3
// ============================================

// -------------------------------
// CELEBRATION
// -------------------------------

function showCelebration(){

    showScreen("celebration");

    // Version 2 will add:
    // ✨ Golden Particles
    // ❤️ Hearts
    // 🌹 Rose Petals
    // 🎆 Fireworks

    setTimeout(()=>{

        showVideo();

    },3000);

}



// -------------------------------
// VIDEO
// -------------------------------

function showVideo(){

    showScreen("video");

    birthdayVideo.currentTime = 0;

    birthdayVideo.play();

    birthdayVideo.onended = ()=>{

        showEnding();

    };

}



// -------------------------------
// ENDING
// -------------------------------

function showEnding(){

    showScreen("ending");

}



// -------------------------------
// VIDEO AUTOPLAY FIX
// -------------------------------

document.addEventListener("click",()=>{

    birthdayVideo.play().catch(()=>{});

},{once:true});



// ============================================
// END OF VERSION 1
// ============================================
