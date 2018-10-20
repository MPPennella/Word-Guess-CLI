let Letter = require("./Letter.js");

let Word = function(word) {
    this.wordArray = [...word].map(makeLetter)

    this.toString = () => {
        return this.wordArray.join("")
    }

    this.checkForLetter = (letter) => {
        for (let i=0; i<this.wordArray.length; i++) {
            this.wordArray[i].checkCharacter(letter)
        }
    }

}

function makeLetter(letter) {
    console.log(letter)
    return new Letter(letter)
}

module.exports = Word