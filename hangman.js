// const input = document.querySelector(".wordinput");
const submitWord = document.querySelector(".submit");
submitWord.addEventListener("click", function(evt) {
  evt.preventDefault();
  const value = document.querySelector("input").value;
  console.log(value);
});
// submit word

// var input = document.querySelector(".wordinput");
// var submitButton = document.querySelector(".submit");

// submitButton.addEventListener("click", submitClick);

// function submitClick(evt) {
//   input = [];
//   console.log(evt);
// }
// submitting words
// function getWord() {
//   let wordField = document.getElementById("#wordinput").nodeValue;
//   let words = [];
// }
