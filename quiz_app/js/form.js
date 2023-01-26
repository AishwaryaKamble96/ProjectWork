const form = document.querySelector('[data-js="form"]');
const createCard = document.querySelector('[data-js="question_card"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  createQuestionCard(data);

  form.reset();
  form.elements.question.focus();
});

function createQuestionCard(elements) {
  const question_card = document.createElement("div");
  question_card.classList.add("question");
  createCard.append(question_card);

  const bookmark = document.createElement("img");
  bookmark.classList.add("question_bookmark");
  bookmark.setAttribute("src", "./assest/bookmark.png");
  bookmark.setAttribute("data-js", "page-bookmark");
  question_card.append(bookmark);

  // // Event listner to Bookmark
  bookmark.addEventListener("click", (e) => {
    const bookmarkValue = bookmark.getAttribute("src");
    if (bookmarkValue === "./assest/bookmarked.png") {
      bookmark.setAttribute("src", "./assest/bookmark.png");
    } else {
      bookmark.setAttribute("src", "./assest/bookmarked.png");
    }
  });

  const question = document.createElement("h2");
  question.textContent = elements.question;
  question.setAttribute("data-js", "question");
  question_card.append(question);

  const answer = document.createElement("h3");
  answer.textContent = elements.answer;
  answer.classList.add("answer");
  answer.setAttribute("data-js", "answer");
  question_card.append(answer);

  const showButton = document.createElement("button");
  showButton.classList.add("show-button");
  showButton.setAttribute("data-js", "show-button");
  showButton.textContent = "Show answer";
  question_card.append(showButton);

  // add event listner
  showButton.addEventListener("click", () => {
    if (showButton.textContent === "Show Answer") {
      showButton.textContent = "Hide Answer";
      answer.classList.add("show");
    } else {
      showButton.textContent = "Show Answer";
      answer.classList.toggle("show");
    }
  });

  const tagList = document.createElement("ul");
  tagList.classList.add("tags_list");
  question_card.append(tagList);

  const tag = document.createElement("li");
  tag.classList.add("tags");
  tag.textContent = elements.tag;
  tagList.append(tag);
}

// Event listner to get amount of charcater left
const questionElement = document.querySelector('[data-js="question"]');
const answerElement = document.querySelector('[data-js="answer"]');
const questionCharLeft = document.querySelector(
  '[data-js ="amount-left-question"]'
);
const answerCharLeft = document.querySelector(
  '[data-js ="amount-left-answer"]'
);

const maxLength_question = questionElement.getAttribute("maxlength");
const maxLength_answer = answerElement.getAttribute("maxlength");

questionCharLeft.textContent = maxLength_question;
answerCharLeft.textContent = maxLength_answer;

questionElement.addEventListener("input", () => {
  questionCharLeft.textContent =
    maxLength_question - questionElement.value.length;
});

answerElement.addEventListener("input", () => {
  answerCharLeft.textContent = maxLength_answer - answerElement.value.length;
});
