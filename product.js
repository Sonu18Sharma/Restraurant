const burgerIcon = document.querySelector(".fa-burger");
const button = document.querySelector(".my-button");

button.addEventListener("mouseenter", () => {
  burgerIcon.classList.add("rotate");
});

button.addEventListener("mouseleave", () => {
  burgerIcon.classList.remove("rotate");
});
function toggleSubMenu(menuCard) {
  const subMenu = menuCard.querySelector('.sub-menu');
  subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
}
