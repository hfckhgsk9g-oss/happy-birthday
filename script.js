document.getElementById("startBtn").addEventListener("click", function () {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `
        <div id="countdown">
            <h1 id="number">3</h1>
        </div>
        `;

        document.body.style.opacity = "1";
        document.body.style.background = "#000";

        let count = 3;

        let timer = setInterval(() => {

            count--;

            if (count > 0) {
                document.getElementById("number").innerHTML = count;
            } else {
                clearInterval(timer);
                showBirthday();
            }

        }, 1000);

    }, 1000);

});

function showBirthday(){

document.body.innerHTML=`

<section class="hero">

<h2>🎉 Today is Your Day 🎉</h2>

<h1>Happy Birthday</h1>

<h3>Dr. Amna Anwar ❤️</h3>

<p>
May Allah bless you with endless happiness,
good health, success and beautiful memories.
</p>

<button id="nextBtn">Watch Your Surprise ❤️</button>

</section>

`;

document.getElementById("nextBtn").onclick = showVideo;

}

function showVideo(){

document.body.innerHTML = `

<div class="videoPage">

<h2>Your Special Surprise ❤️</h2>

<video controls autoplay playsinline>
<source src="Untitled%202_1080p.mov" type="video/quicktime">
Your browser does not support video.
</video>

<br><br>

<button id="letterBtn">
Continue ❤️
</button>

</div>

`;

document.getElementById("letterBtn").onclick = showLetter;

}

function showLetter(){

document.body.innerHTML = `

<div class="hero">

<h1>💌</h1>

<h2>Dear Dr. Amna Anwar ❤️</h2>

<p style="max-width:700px">

Today is not just your birthday...

It is the day Allah blessed this world with someone truly special.

May every dream you have come true.

May your smile never fade.

May happiness always find you wherever life takes you.

Thank you for being such an amazing person.

Happy Birthday once again.

Forever wishing the very best for you.

❤️

<b>Aflatoon 😎</b>

</p>

<button onclick="location.reload()">
Start Again ❤️
</button>

</div>

`;

}
