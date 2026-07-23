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
showIntro();

}

},1000);

}
function showIntro(){

const lines = [
"Close your eyes...",
"And make a wish...",
"Because today...",
"...is all about you."
];

let index = 0;

document.body.innerHTML = `
<section id="introScreen" style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:#000;
">
<h1 id="introText" style="
color:#FFD700;
font-size:38px;
text-align:center;
opacity:0;
transition:1s;
">
</h1>
</section>
`;

const text = document.getElementById("introText");

function nextLine(){

if(index >= lines.length){

setTimeout(showLetter,1000);

return;

}

text.style.opacity="0";

setTimeout(()=>{

text.innerHTML=lines[index];

text.style.opacity="1";

index++;

setTimeout(nextLine,2000);

},700);

}

nextLine();

}
