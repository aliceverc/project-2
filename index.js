// // ADD TOGGLE FUNCTIONALITY to bookmark buttons

// querySelectorAll > returns a list of all matching elements
const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]'
);

// forEach > goes through each element in that list one by one
bookmarkButtons.forEach((button) => {
  // Add a click event listener to each button that toggles the "bookmark--active" class
  button.addEventListener("click", () => {
    button.classList.toggle("bookmark--active");
  });
});

// // ADD TOGGLE FUNCTIONALITY to bookmark buttons

// Select all the "Show answer" buttons in the document
const cardButtonAnswer = document.querySelectorAll(
  '[data-js="card__button-answer"]'
);

const cardAnswer = document.querySelectorAll('[data-js="card__answer"]');

// Loop through each button using forEach
cardButtonAnswer.forEach((button) => {
  // Add a click event listener to each individual button
  button.addEventListener("click", () => {
    // 1. Find the corresponding card element (the one that contains the button)
    const cardAnswer = button
      .closest(".card") // go up to the closest parent with class "card"
      .querySelector('[data-js="card__answer"]'); // find the answer <p> inside that card

    // 2. Toggle the visibility class on the answer
    // If it's hidden, show it. If it's shown, hide it.
    cardAnswer.classList.toggle("card__answer--active");

    // 3. Update the button text depending on the current visibility of the answer
    if (cardAnswer.classList.contains("card__answer--active")) {
      button.textContent = "Hide answer";
    } else {
      button.textContent = "Show answer";
    }
  });
});
