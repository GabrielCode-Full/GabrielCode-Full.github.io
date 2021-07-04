const hamOpen = document.getElementById("hamburger-open");
const hamClose = document.getElementById("hamburger-close");
const hamAct = document.getElementById("hamburger-active");
const imgYowndrift = document.getElementById("img-yowndrift");
const overlayYowndrift = document.getElementById("overlay-yowndrift");

hamOpen.addEventListener("click", () => {
    hamAct.classList.toggle("nav-toggle");
});

hamClose.addEventListener("click", () => {
    hamAct.classList.toggle("nav-toggle");
});

// imgYowndrift.addEventListener("mouseover", () => {
//     overlayYowndrift.classList.toggle("overlay-yowndrift");
//     // console.log("enter");
// });