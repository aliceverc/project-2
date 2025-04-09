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
