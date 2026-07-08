const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Opens and closes the shop sidebar navigation on small screens.
if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
  });
}

const cartCounts = document.querySelectorAll(".cart-count");
let count = 0;

// Small practice interaction: each Add to cart button increases the visible cart number.
document.querySelectorAll(".add-to-cart").forEach(function (button) {
  button.addEventListener("click", function () {
    count = count + 1;
    cartCounts.forEach(function (cartCount) {
      cartCount.textContent = count;
    });
  });
});
