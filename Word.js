let Letter = require("./Letter.js");

let Word = function(word) {
    this.wordArray = [...word].map(makeLetter)

    this.toString = () => {
        return this.wordArray.join("")
    }

}

function makeLetter(letter) {
    console.log(letter)
    return new Letter(letter)
}

module.exports = Word