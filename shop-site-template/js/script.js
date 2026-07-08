const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
  });
}
const cartCount = document.querySelector(".cart-count");
let count = 0;
document.querySelectorAll(".add-to-cart").forEach(function (button) {
  button.addEventListener("click", function () {
    count = count + 1;
    if (cartCount) cartCount.textContent = count;
  });
});
