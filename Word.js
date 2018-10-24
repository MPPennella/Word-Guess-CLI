let Letter = require("./Letter.js");

let Word = function(word) {
    this.wordArray = [...word].map(makeLetter)

    this.toString = () => {
        return this.wordArray.join("")
    }

    this.checkForLetter = (letter) => {
        this.wordArray.map((index)=>{
            index.checkCharacter(letter)
        })
    }

}

function makeLetter(letter) {
    return new Letter(letter)
}

module.exports = Word