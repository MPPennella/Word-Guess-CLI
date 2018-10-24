const inquirer = require("inquirer");
const Word = require("./Word.js");

let someWord = "peanut"
let wordToGuess = new Word(someWord.toUpperCase());

guessLetter();

function guessLetter() {
    inquirer.prompt({
        message: "Guess a letter (A-Z):",
        name: "letter"
    }).then( response => {
        let letter = response.letter.trim().toUpperCase();
        console.log(letter);

        if (letter.length==1 && letter>="A" && letter<="Z") {
            console.log("Valid letter")
            wordToGuess.checkForLetter(letter);
            console.log(wordToGuess.toString());

            guessLetter();
        } else {
            console.log("Invalid letter")
        }
    })
}