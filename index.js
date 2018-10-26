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
                // If word is fully guessed, display victory message and exit
                if (wordToGuess.checkAllGuessed()) {
                    console.log("You won!")
                    return;
                }
            } else {
                // Decrement guesses
                guessesLeft--
                
                console.log(`Word did not contain '${letter}'`)
                console.log(`You have ${guessesLeft} wrong guesses left`)

                // If no guesses left, display defeat message and exit
                if (guessesLeft<=0) {
                    console.log("You lost!")
                    console.log(`Word was: ${wordToGuess.revealWord()}`)
                    return;
                }
            }

            console.log(`Word: ${wordToGuess}`);
            guessLetter();
            
        } else {
            console.log("Invalid letter")
            // Ask if they want to try again

        }
    })
}