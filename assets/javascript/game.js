var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var guessesNum = 9;
var guessChoice = [];
var wins = 0;
var losses = 0;

var displayResults = function() {
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("guessesNum").innerHTML =
    "Guesses Left: " + guessesNum;
  document.getElementById("guessChoice").innerHTML =
    "Your guesses so far: " + guessChoice;
};
var reset = function() {
  guessChoice = [];
  guessesNum = 9;
  computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
  var userGuess = event.key;
  guessChoice.push(userGuess);

  console.log(computerChoice);

  if (userGuess === computerChoice) {
    wins++;
    reset();
    alert("Way to go!");
  } else {
    guessesNum--;
  }

  if (guessesNum <= 0) {
    losses++;
    reset();
    alert("Sorry Try Again!");
  }

  displayResults();
};
