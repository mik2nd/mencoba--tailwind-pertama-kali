// nav scroll script
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
};

// navspin script toggle
const navLine = document.querySelector("#spin-nav");
// items
const navMenu = document.querySelector("#nav-menu");

navLine.addEventListener("click", function () {
  navLine.classList.toggle("nav-active");
  navMenu.classList.toggle("hidden");
});
