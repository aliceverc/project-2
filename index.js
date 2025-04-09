// // ADD TOGGLE FUNCTIONALITY to bookmark buttons

// querySelectorAll > returns a list of all matching elements
const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]'
);

// forEach > goes through each element in that list one by one
bookmarkButtons.forEach((button) => {
  //add a click event listener to each button that toggles the "bookmark--active" class
  button.addEventListener("click", () => {
    button.classList.toggle("bookmark--active");
  });
});

// ADD TOGGLE FUNCTIONALITY to bookmark buttons

const cardButtonAnswer = document.querySelectorAll(
  '[data-js="card__button-answer"]'
);
const card = document.querySelectorAll('[data-js="card__answer"]');

cardButtonAnswer.forEach((button) => {
  button.addEventListener("click", () => {
    button
      .closest(".card")
      .querySelector('[data-js="card__answer"]')
      .classList.toggle("card__answer--active");
  });
});
