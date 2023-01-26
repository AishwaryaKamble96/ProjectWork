const showAnswerButton = document.querySelector('[data-js="show-button"]');
const answerValue = document.querySelector('[data-js="answer"]');

const bookmarkImg = document.querySelector('[ data-js="page-bookmark"]');

// Show buttonevent listner
showAnswerButton.addEventListener("click", () => {
  answerValue.classList.toggle("show");
  console.log(showAnswerButton.textContent);
  if (showAnswerButton.textContent === "Show Answer") {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show Answer";
  }
});

//Event listner for bookmark button
bookmarkImg.addEventListener("click", (e) => {
  const bookmarkValue = bookmarkImg.getAttribute("src");
  if (bookmarkValue === "./assest/bookmarked.png") {
    bookmarkImg.setAttribute("src", "./assest/bookmark.png");
  } else {
    bookmarkImg.setAttribute("src", "./assest/bookmarked.png");
  }
});
