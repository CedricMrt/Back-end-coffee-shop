/* ######## navBar script ####### */
function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", (e) => {
        navbar.classList.toggle("show-nav");
    });

    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            navbar.classList.toggle("show-nav");
        });
    });
}
toggleMenu();

/* ####### toggle input dark/light mode ######## */
const body = document.querySelector("body");
document.querySelector("#darkMode").addEventListener("click", () => {
    body.classList.toggle("dark");
});