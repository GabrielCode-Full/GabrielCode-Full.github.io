const hamOpen = document.getElementById("hamburger-open");
const hamClose = document.getElementById("hamburger-close");
const hamAct = document.getElementById("hamburger-active");

hamOpen.addEventListener("click", () => {
    hamAct.classList.toggle("nav-toggle");
});

hamClose.addEventListener("click", () => {
    hamAct.classList.toggle("nav-toggle");
});