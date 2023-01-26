const darkModeButton = document.querySelector('[data-js="switch_mode"]');
const bodyElement = document.querySelector('[data-js="body"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
