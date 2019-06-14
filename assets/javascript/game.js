


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var guessesNum = 10;
var guessChoice = [];
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessChoice.push(userGuess);

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)



    if (userGuess === computerChoice) {
        wins++;
        guessesNum = 9;
        alert("Way to go!");
    }else{
        guessesNum--;
    }
    if (guessChoice === 0){
        losses++;
    }
    

// function win()    
// wins.innerHTML = wins;
// losses.innerHTML = losses;
// }
// function wins() {
//     wins++;
//     resetGame();
//     }
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesNum").innerHTML = "Guesses Left: " + guessesNum; 
    document.getElementById("guessChoice").innerHTML = "Your guesses so far: " + guessChoice;


    }
