let Letter = function(letter) {
    this.value = letter;
    this.placeholder = "_";

    this.isGuessed = false;

    this.toString =  () => {
        if (this.isGuessed) return this.value;
        else return this.placeholder;
    }

    this.checkCharacter = (chkLetter) => {
        if (chkLetter == this.value) this.isGuessed = true;
    }

}

module.exports = Letter