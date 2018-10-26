# Word-Guess-CLI
CLI Hangman-type game using Node.js

## Gameplay
Gameplay follows a standard hangman-style progression:

* The player must correctly guess all the letters in a word before they guess wrongly 10 times to win
* The game will pick a random word from the list of known words
* The player will be shown the word, but with all letters replaced by underscores
* The player will be prompted to pick a letter
  * If the letter was correctly guessed, fill in all instances of that letter in the word
  * If the letter was incorrectly guessed, decrement the number of guesses remaining and add letter to display of wrong guesses
  * If letter was already guess or an invalid input was entered, give error and let player guess again
* The player wins if they guess all the letters before running out of wrong guesses, and loses if they run out of guesses before completing the word

## Creating a custom word list
The list of words used by the game is stored in the [wordList.txt] file. The default list contains all the elements of the periodic table.

The list of words that the game will use can be configured. Valid words can be made using any of the standard 26 letters of the English language (A-Z). Accents and other special letters or charaters are not allowed, including spaces and hypens (-). Words are case-insensitive, and will be converted to all uppercase at run-time.

Words must be entered one-per-line. Do not leave empty lines anywhere, including between words, or at the beginning or end of the document.