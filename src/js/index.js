import "../style/index.scss";

window.onload = function() {
  // array with card types
  let cardType = ["♦", "♥", "♠", "♣"];

  // array with card values
  let cardValue = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // variables holding the h1 element from html
  var topType = document.getElementById("top");
  var centerValue = document.getElementById("center");
  var bottomType = document.getElementById("bottom");

  // assign type to card
  let random = pickCardType(); // this variable holds a random number from 1 to 4
  let type = cardType[random]; // this variable holds a random value from the cardType array
  topType.innerHTML = type; // assign the cardType value to the top h1
  pickColor(topType, random); // this function picks the color based on the cardType
  bottomType.innerHTML = type; // assign the cardType value to the bottom h1
  pickColor(bottomType, random);

  // assign value to center h1 on card
  let value = cardValue[pickCardValue()];
  centerValue.innerHTML = value;
};

// function to generate a random number between 0 and 3 to Pick a suit
function pickCardType() {
  return Math.floor(Math.random() * 4);
}

// Generate a random number between 0 and 12 to pick a card number
function pickCardValue() {
  return Math.floor(Math.random() * 13);
}

// pick color function
function pickColor(element, index) {
  switch (index) {
    case 0:
      element.style.color = "red";
      break;
    case 1:
      element.style.color = "red";
      break;
    default:
      element.style.color = "black";
      break;
  }
}
