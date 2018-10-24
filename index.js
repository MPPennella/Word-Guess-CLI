// let Letter = require("./Letter.js")

// let word = "SOMETHING"
// let wordArr = [...word]

// console.log(wordArr.map(helper).join(""))

// function helper(ltr) {
//     console.log(ltr)
//     return new Letter(ltr)
// }
// let ltrArr=[];
// for (let i=0; i<wordArr.length; i++) {
//     let ltr = new Letter(wordArr[i])
//     ltr.checkCharacter(wordArr[i])

//     ltrArr.push(ltr)
// }
// console.log(ltrArr.join(""))

// let Word = require("./Word.js")

// let word = new Word("SOMETHING")
// console.log(word.toString())
// word.checkForLetter("O")
// word.checkForLetter("W")
// word.checkForLetter("T")
// console.log(word.toString())

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