var player1Word;
var player1Array;
var guesses = [];
var player2Guess = [];
var guessesRemaining;
var livesLeft = 0;

function wordPrompt(){
  player1Word = prompt("What is your chosen word, Player One?");
  //console.log(player1Word);
  player1Array = player1Word.split("");
  //console.log(player1Array);
  //console.log(player1Array.length);
  createBoard();
  updateBoard();
  updateLives();
}

function createBoard(){
  for (var i = 0; i < player1Array.length; i++){
    guesses.push("_");
  }
  //console.log(guesses);
}

function updateLives(){
  document.getElementById("counter").innerText = "You have " + livesLeft + " goes left";
}

function updateBoard(){
  document.getElementById("gameLetters").innerText = guesses;
}

function guessMade(){
  player2Guess = document.getElementById("guessText").value;
  console.log("Guess: " + player2Guess);
}
//the letter doesn't disappear from the input box which is definitely not ideal
//it also ought to stop you from being able to input the same letter twice


function checkForMatch(){
  //checks the letter input by player2 against those stored, if it matches any
  //the letter is added to the array displayed
  for (var i = 0; i < player2Guess; i +=1){
    if (player2Guess === gameLetters[i])
      guesses.push([i]);
  }
}

function noMatch(){
  //if player2's guess doesn't match any of the stored letters, 
  //reveal a square on the grid, increment score -1, stop at 0
}

function checkForWin(){
  //check to see if player2 has the same number of matches to letters stored
  //in player1's word - if yes, they have won & score is incremented
}

function checkForLose(){
  //check to see if all squares are uncovered, if so player1 wins, their score
  //is incremented
}

//for score it might actually be better to write a for loop which takes the number
//of letters in the array, -1 from it and shows that as the lives remaining?



