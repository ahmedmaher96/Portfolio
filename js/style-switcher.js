// ================= Style Switcher Toggle =================

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    styleSwitcherToggle.querySelector("i").classList.toggle("fa-skin");
    styleSwitcherToggle.querySelector("i").classList.toggle("fa-spin");
});
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
    if (styleSwitcherToggle.querySelector("i").classList.contains("fa-spin")) {
        styleSwitcherToggle.querySelector("i").classList.toggle("fa-spin");
    }
})

// ================= Themes  =================

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            document.querySelector(".style-switcher").classList.remove("open")
            styleSwitcherToggle.querySelector("i").classList.toggle("fa-spin");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

// ================= Dark Light Mode  =================

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

