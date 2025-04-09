const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector(".card-list");
const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');
const tag = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  event.target.elements.question.focus();

  const card = document.createElement("article");
  card.classList.add("card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.textContent = question.value;
  cardQuestion.classList.add("card__question");

  const buttonAnswer = document.createElement("button");
  buttonAnswer.classList.add("card__button-answer");
  buttonAnswer.textContent = "Show answer";

  const cardQuizAnswer = document.createElement("p");
  cardQuizAnswer.textContent = answer.value;
  cardQuizAnswer.classList.add("card__answer");

  buttonAnswer.addEventListener("click", () => {
    cardQuizAnswer.classList.toggle("card__answer--active");

    if (cardQuizAnswer.classList.contains("card__answer--active")) {
      buttonAnswer.textContent = "Hide answer";
    } else {
      buttonAnswer.textContent = "Show answer";
    }
  });

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagItem = document.createElement("li");
  tagItem.textContent = tag.value;
  tagItem.classList.add("card__tag-list-item");

  const cardButtonBookmark = document.createElement("div");
  cardButtonBookmark.classList.add("card__button-bookmark");

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("bookmark");
  buttonBookmark.setAttribute("aria-label", "bookmark");
  buttonBookmark.setAttribute("type", "button");
  buttonBookmark.addEventListener("click", () => {
    buttonBookmark.classList.toggle("bookmark--active");
  });

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

  // Create the <path> separately
  const bookmarkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  bookmarkPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  bookmarkIcon.appendChild(bookmarkPath);

  const listItem = document.createElement("li");
  listItem.classList.add("card-list__item");

  listItem.append(card);
  card.append(cardQuestion);
  card.append(buttonAnswer);
  card.append(cardQuizAnswer);
  card.append(tagList);
  tagList.append(tagItem);
  card.append(cardButtonBookmark);
  cardButtonBookmark.append(buttonBookmark);
  buttonBookmark.append(bookmarkIcon);
  form.after(listItem);

  event.target.reset();
});
