// Grab elements from the DOM
const form = document.querySelector('[data-js="form"]');
const tag = document.querySelector('[data-js="tag"]');

const question = document.querySelector('[data-js="question"]');
const questionCount = document.querySelector('[data-js="question-count"]');

const answer = document.querySelector('[data-js="answer"]');
const answerCount = document.querySelector('[data-js="answer-count"]');

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  event.target.elements.question.focus(); // Focus question input again

  // ----- CREATE NEW CARD ELEMENT -----

  // <article class="card">
  const card = document.createElement("article");
  card.classList.add("card");

  // <h2 class="card__question">Question text</h2>
  const cardQuestion = document.createElement("h2");
  cardQuestion.textContent = question.value;
  cardQuestion.classList.add("card__question");

  // <button class="card__button-answer">Show answer</button>
  const buttonAnswer = document.createElement("button");
  buttonAnswer.classList.add("card__button-answer");
  buttonAnswer.textContent = "Show answer";

  // <p class="card__answer">Answer text</p>
  const cardQuizAnswer = document.createElement("p");
  cardQuizAnswer.textContent = answer.value;
  cardQuizAnswer.classList.add("card__answer");

  // Toggle answer visibility on click
  buttonAnswer.addEventListener("click", () => {
    cardQuizAnswer.classList.toggle("card__answer--active");

    if (cardQuizAnswer.classList.contains("card__answer--active")) {
      buttonAnswer.textContent = "Hide answer";
    } else {
      buttonAnswer.textContent = "Show answer";
    }
  });

  // ----- TAG SECTION -----

  // <ul class="card__tag-list">
  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  // <li class="card__tag-list-item">#tag</li>
  const tagItem = document.createElement("li");
  tagItem.textContent = `#${tag.value}`;
  tagItem.classList.add("card__tag-list-item");

  // Append tag to list
  tagList.append(tagItem);

  // ----- BOOKMARK BUTTON SECTION -----

  // <div class="card__button-bookmark">
  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  // <button class="bookmark">...</button>
  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("bookmark");
  buttonBookmark.setAttribute("aria-label", "bookmark");
  buttonBookmark.setAttribute("type", "button");

  // Toggle bookmark active state
  buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--active");
  });

  // SVG Bookmark icon
  const bookmarkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  bookmarkIcon.classList.add("bookmark__icon");
  bookmarkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  bookmarkIcon.setAttribute("viewBox", "0 0 24 24");
  bookmarkIcon.setAttribute("width", "24");
  bookmarkIcon.setAttribute("height", "24");
  bookmarkIcon.setAttribute("fill", "currentColor");

  // SVG path for icon
  const bookmarkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  bookmarkPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  // Append icon path to SVG, then button
  bookmarkIcon.appendChild(bookmarkPath);
  buttonBookmark.appendChild(bookmarkIcon);
  cardButtonBookmark.appendChild(buttonBookmark);

  // ----- APPEND EVERYTHING TO THE CARD -----

  card.appendChild(cardQuestion);
  card.appendChild(buttonAnswer);
  card.appendChild(cardQuizAnswer);
  card.appendChild(tagList);
  card.appendChild(cardButtonBookmark);

  // Wrap card in <li class="card-list__item">
  const listItem = document.createElement("li");
  listItem.classList.add("card-list__item");
  listItem.appendChild(card);

  // Insert card under the form
  form.after(listItem);

  // Reset form fields
  event.target.reset();
});

// FORM FIELD TEXT COUNTER

function updateCharacterCount(textarea, counterSpan) {
  textarea.addEventListener("input", () => {
    counterSpan.textContent = textarea.value.length;
  });
}

updateCharacterCount(question, questionCount);
updateCharacterCount(answer, answerCount);
