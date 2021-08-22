const menu = document.querySelector("#mobile-menu"),
  menuLinks = document.querySelector(".navbar__menu");

// Toggle the menu
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
