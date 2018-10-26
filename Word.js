let Letter = require("./Letter.js");

let Word = function(word) {
    this.wordArray = [...word].map(makeLetter)

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

}

function makeLetter(letter) {
    return new Letter(letter)
}

module.exports = Word