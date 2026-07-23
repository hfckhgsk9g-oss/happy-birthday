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

            if(count > 0){

                document.getElementById("number").innerHTML = count;

            }else{

                clearInterval(timer);

                showBirthday();

            }

        },1000);

    },1000);

});


function showBirthday(){

document.body.innerHTML=`

<section class="hero">

<h2>🎉 Today is Your Day 🎉</h2>

<h1>Happy Birthday</h1>

<h3>Dr. Amna Anwar ❤️</h3>

<p>

May Allah bless you with endless happiness,
good health, success,
and countless beautiful moments.

May your smile always stay as beautiful
as it is today.

✨ You deserve every happiness in this world. ✨

</p>

<button id="nextBtn">
Continue ❤️
</button>

</section>

`;

document.getElementById("nextBtn").onclick=function(){

alert("Next Part: Photo Gallery ❤️");

};

}
