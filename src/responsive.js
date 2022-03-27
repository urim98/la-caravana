const navMenuSmall = document.querySelector(".responsive-menu");
const navMenu = document.querySelector("nav");
const header = document.querySelector("header");

navMenuSmall.addEventListener("click", () => {
    navMenuSmall.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav ul li a").forEach( n=> n.addEventListener("click", () => {
    navMenuSmall.classList.remove("active");
    navMenu.classList.remove("active");
}));