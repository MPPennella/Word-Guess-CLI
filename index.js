const inquirer = require("inquirer");
const Word = require("./Word.js");

// Array of possible words to guess
let possibleWords = ["peanut","butter","jelly", "time"]

// Game variables
let guessesLeft
let guessedLetters
let badGuesses
let wordToGuess

// Begin game sequence
initializeGame();
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
            if ( !guessedLetters.includes(letter) ) {
                // Add letter to list of guesses
                guessedLetters.push(letter);

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
                    // Decrement guesses left
                    guessesLeft--

                    // Add letter to list of bad guesses
                    badGuesses.push(letter);
                    badGuesses.sort();
                    console.log(`Bad guesses: ${badGuesses.join(", ")}`)
                    
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
            }   else {
                console.log("Letter already guessed");
            }    
            guessLetter();     
        } else {
            console.log("Invalid letter, please input a valid letter (A-Z)")
            guessLetter();

        }
    })
}

// Initializes game state
function initializeGame() {
    guessesLeft = 10;
    guessedLetters = [];
    badGuesses = [];
    wordToGuess = randomWord();
}

// Returns random word from array of possible words
function randomWord() {
    let rand = Math.floor( Math.random()*possibleWords.length )
    return new Word(possibleWords[rand])
}