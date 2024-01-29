const container = document.querySelector(".container");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    container.classList.toggle("show-menu");
});