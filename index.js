const inquirer = require("inquirer");
const Word = require("./Word.js");

let someWord = "peanut"
let wordToGuess = new Word(someWord.toUpperCase());

guessLetter();

function guessLetter() {
    // Prompt for A-Z letter entry
    inquirer.prompt({
        message: "Guess a letter (A-Z):",
        name: "letter"
    }).then( response => {
        let letter = response.letter.trim().toUpperCase();
        console.log(letter);

        // Check for valid entry
        if (letter.length==1 && letter>="A" && letter<="Z") {
            console.log("Valid letter")

            // Check if letter is in word and update word
            wordToGuess.checkForLetter(letter);
            console.log(wordToGuess.toString());

            // If word is not fully guessed, guess again
            guessLetter();
            //Otherwise, player has won
        } else {
            console.log("Invalid letter")
            // Ask if they want to try again

        }
    })
}