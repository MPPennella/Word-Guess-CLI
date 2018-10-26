let Letter = function(letter) {
    this.value = letter;

    this.isGuessed = false;

    this.toString =  () => {
        if (this.isGuessed) return this.value;
        else return "_";
    }

    this.checkCharacter = (chkLetter) => {
        if (chkLetter == this.value) return this.isGuessed = true;
    }

}

module.exports = Letter