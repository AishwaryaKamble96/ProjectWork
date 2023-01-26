const showAnswerButton = document.querySelector('[data-js="show-button"]');
const answerValue = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  answerValue.classList.toggle("show");
});
