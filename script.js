const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
            welcome.style.display = "flex";

            // Smooth fade in
            welcome.animate(
                [
                    { opacity: 0, transform: "translateY(40px)" },
                    { opacity: 1, transform: "translateY(0px)" }
                ],
                {
                    duration: 1200,
                    fill: "forwards",
                    easing: "ease-out"
                }
            );
        }, 800);

    }, 2500);
});

// Button Animation
startBtn.addEventListener("mouseenter", () => {
    startBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 500
        }
    );
});

// Button Click
startBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "#birthday";

    },1000);

});
