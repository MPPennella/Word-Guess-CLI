const inquirer = require("inquirer");
const fs = require("fs");
const Word = require("./Word.js");

// Array for possible words to guess
let possibleWords
// Game variables
let wordToGuess
let guessesLeft
let guessedLetters
let badGuesses

// Load word list
fs.readFile("wordList.txt","UTF8",(error, data) => {
    if (error) throw error;

    // Split list of text items on line breaks
    possibleWords = data.split(/\r?\n/g)

    // Begin game sequence
    initializeGame();
    guessLetter();
})

function guessLetter() {
    console.log(`Word: ${wordToGuess}`);
    console.log(`Bad guesses: ${badGuesses.join(", ")}`)

    // Prompt for A-Z letter entry
    inquirer.prompt({
        message: "Guess a letter (A-Z):",
        name: "letter"
    }).then( response => {
        let letter = response.letter.trim().toUpperCase();
        console.log();

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
                        console.log(`Word was: ${wordToGuess.revealWord()}`)
                        return;
                    }
                } else {
                    // Decrement guesses left
                    guessesLeft--

                    // Add letter to list of bad guesses
                    badGuesses.push(letter);
                    badGuesses.sort();
                    
                    console.log(`Word did not contain '${letter}'`)
                    console.log(`You have ${guessesLeft} wrong guesses left`)

                    // If no guesses left, display defeat message and exit
                    if (guessesLeft<=0) {
                        console.log("You lost!")
                        console.log(`Word was: ${wordToGuess.revealWord()}`)
                        return;
                    }
                }

                // console.log(`Word: ${wordToGuess}`);
            }   else {
                console.log("Letter already guessed");
            }   
        } else {
            console.log("Invalid letter, please input a valid letter (A-Z)")
        }
        console.log();
        guessLetter();
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