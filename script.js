const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

// Loading Animation
window.onload = () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

            welcome.style.display = "flex";

            welcome.animate([
                {
                    opacity:0,
                    transform:"translateY(40px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0px)"
                }
            ],{

                duration:1000,
                fill:"forwards",
                easing:"ease-out"

            });

        },1000);

    },2500);

};


// Button Click

startBtn.onclick = () => {

document.body.style.transition="1s";
document.body.style.opacity="0";

setTimeout(()=>{

document.body.innerHTML=`

<section style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:black;
flex-direction:column;
color:white;
font-family:Poppins;
text-align:center;
padding:30px;
">

<h2 style="
color:#FFD700;
letter-spacing:4px;
margin-bottom:20px;
">

Every Beautiful Story...

</h2>

<p style="
font-size:24px;
max-width:500px;
line-height:1.8;
">

Begins with one special person.

</p>

</section>

`;

document.body.style.opacity="1";

setTimeout(showCountdown,2500);

},1000);

};



function showCountdown(){

document.body.innerHTML=`

<section style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#000;
">

<h1 id="countNumber"
style="
font-size:150px;
color:#FFD700;
font-family:Cinzel;
">
3
</h1>

</section>

`;

let number=3;

const interval=setInterval(()=>{

number--;

if(number>0){

document.getElementById("countNumber").innerHTML=number;

}else{

clearInterval(interval);

// Next Part
alert("Countdown Completed ❤️");

}

},1000);

}
