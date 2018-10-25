// decalare variables here!!!!
const input = document.querySelector(".wordinput");
const submitWord = document.querySelector(".submit");
var hangMan = document.querySelectorAll(".bodyparts");
const letterInput = document.querySelector(".letterinput");
const letterButton = document.querySelector(".letterbutton");

submitWord.addEventListener("click", function(evt) {
  const value = document.querySelector("input").value;
  evt.preventDefault();

  var splitWord = value.split("");
  // console.log(splitWord);

  // create elements
  let box = document.createElement("div");
  let underScore = document.createElement("p");
  underScore.textContent = " ___";
  underScore.style.backgroundColor = "green";
  box.appendChild(underScore);

  // let letterTyped = document.getElementsByClassName("lettercontainer");
  // let answer = document.getElementsByClassName("answeredletters");
  for (i = 0; i < splitWord.length; i++) {
    let letterBox = splitWord[i];
    if (letterBox[i] === "") {
    }

    document.querySelector(".answeredletters").innerHTML += box.innerHTML;
  }
});

letterButton.addEventListener("click", function(evt) {
  const letterValue = document.querySelector("letterinput").value;
  evt.preventDefault();
  if (letterValue === splitWord);
  console.log(letterValue);
});

// check each time a user enters a character, and check if its the same character as the other user enters
// if its the same we need to add that character to the dom elements

// set variables to put word into array and split it

// make an input field for the other user
// create an element in the dom, that is an underscore and above the underscore is a box.
//

// you should have as many boxes as there are characters from the string the first user entered
// that will hold the characters the user enters
