const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Opens and closes the top navigation on small screens.
// CSS hides .nav-links on mobile, then .is-open displays it.
if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
  });
}
