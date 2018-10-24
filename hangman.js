var input = document.querySelector(".wordinput");
var submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", submitClick);

function submitClick(evt) {
  input = [];
  console.log(evt);
}

// function getWord() {
//   let wordField = document.getElementById("#wordinput").nodeValue;
//   let words = [];
// }
