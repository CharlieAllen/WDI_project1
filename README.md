# WDI_project1
A word game based on hangman. 2015-10-13.

* Player 1 is prompted to enter a word of their choosing into a box, this word is then hidden.
* The word becomes displayed as underscores to indicate to Player 2 the letters they must guess.
* Player 2 is given one less life than there are letters in the word.
* Player 2 may enter their guess, one letter at a time, in the input box below the underscores.
* Their guess is checked against the stored letters from Player 1's word.  Any matches are put in place of the appropriate underscore to show Player 2 the word they are building.  Any mismatches are stored underneath the input box so that Player 2 can see the letters they have already used.
* Upon win/lose a dialog box tells the player their outcome, and then the board is reset so that play may start again.

Originally it was intended for there to be a losing image with a grid of squares overlaying it which would incrementally become revealed as Player 2 made wrong choices.  This idea was abandoned primarily because the grid would have had a fixed number of squares and if Player 1 chose a short word the large number of lives the grid provided could have given Player 2 an unfair advantage.

There is 





