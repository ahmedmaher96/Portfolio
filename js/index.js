// ==================== Typing ====================

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Freelancer", "Analyst"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
});

// ==================== Navbar ====================
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
const hireMeBtn = document.querySelectorAll(".hire-me");
for (let i = 0; i < hireMeBtn.length; i++) {
    hireMeBtn[i].addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
    navBar = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function asideSectionTogglerBtn() {
    navBar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1]
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1] ) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
function addBackSection(num) {
    allSections[num].classList.add("back-section");
}
function removeBackSection() {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
    }
}
