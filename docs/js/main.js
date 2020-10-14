const hamburgerNav = document.getElementById("hamburger-nav");
const navOverlay = document.getElementById("hamburger-overlay");
const active = document.getElementById("hamburger-active");
const line1 = document.getElementsByClassName("line1")[0];
const line2 = document.getElementsByClassName("line2")[0];
const line3 = document.getElementsByClassName("line3")[0];
const about = document.getElementsByClassName("about-container");

for (let i = 0; i < about.length; i++) {
	about[i].addEventListener("click", () => {
    about[i].classList.toggle("remove-shadow");
	});
}

// for navbar
hamburgerNav.addEventListener("click", () => {

	  active.classList.toggle("active");
	  document.body.classList.toggle("scroll");
	  line1.classList.toggle("line1-style");
	  line2.classList.toggle("line2-style");
	  line3.classList.toggle("line3-style");
	  navOverlay.classList.toggle("hamburger-hide");

});

navOverlay.addEventListener("click", () => {

 	active.classList.toggle("active");
 	document.body.classList.toggle("scroll");
 	line1.classList.toggle("line1-style");
	line2.classList.toggle("line2-style");
	line3.classList.toggle("line3-style");
	navOverlay.classList.toggle("hamburger-hide");

});