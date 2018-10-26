const inquirer = require("inquirer");
const Word = require("./Word.js");

let someWord = "peanut"
let wordToGuess = new Word(someWord.toUpperCase());

let guessesLeft = 10;

// Begin game sequence
guessLetter();

function guessLetter() {
    // Prompt for A-Z letter entry
    inquirer.prompt({
        message: "Guess a letter (A-Z):",
        name: "letter"
    }).then( response => {
        let letter = response.letter.trim().toUpperCase();
        // console.log(letter);

        // Check for valid entry
        if (letter.length==1 && letter>="A" && letter<="Z") {
            // console.log("Valid letter")

            // Check if letter is in word and update word
            let letterFound = wordToGuess.checkForLetter(letter);

            if (letterFound) {
                console.log(`Word contained '${letter}'`)
            } else {
                // Decrement guesses
                guessesLeft--
                
                console.log(`Word did not contain '${letter}'`)
                console.log(`You have ${guessesLeft} wrong guesses left`)
            }

            console.log(`Word: ${wordToGuess}`);

            // If word is not fully guessed, guess again
            if(!wordToGuess.checkAllGuessed()) guessLetter();
            //Otherwise, player has won
            else console.log("You won!")
        } else {
            console.log("Invalid letter")
            // Ask if they want to try again

        }
    })
}