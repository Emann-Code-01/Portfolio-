const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

burger.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("open");
  mobileMenu.style.display = isOpen ? "flex" : "none";
});
