const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
  });
}
