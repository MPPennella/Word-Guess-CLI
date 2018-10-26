let Letter = require("./Letter.js");

let Word = function(word) {
    this.wordArray = [...word.toUpperCase()].map(makeLetter)

    // Returns string representation of word with placeholders for letters not guessed yet
    this.toString = () => {
        return this.wordArray.join("")
    }

    this.checkForLetter = (letter) => {
        let letterFound = false;
        this.wordArray.map((index)=>{
            if (index.checkCharacter(letter)) letterFound=true;
        })
        return letterFound;
    }

    // Checks if all letters in word have been guessed
    this.checkAllGuessed = () => {
        let allGuessed = true
        
        for (let i=0; i<this.wordArray.length; i++) {
            if (!this.wordArray[i].isGuessed) allGuessed = false;
        }
        
        return allGuessed;
    }

    // Returns string containing stored word
    this.revealWord = () => {
        let word = this.wordArray.map( (letter) => {            return letter.value
        }).join("")
        return word;
    }


}

function makeLetter(letter) {
    return new Letter(letter)
}

module.exports = Word