var player1Word;
var player1Array;
var guesses = [];
var player2Guess = [];

function wordPrompt(){
  player1Word = prompt("What is your chosen word, Player One?");
  //console.log(player1Word);
  player1Array = player1Word.split("");
  //console.log(player1Array);
  //console.log(player1Array.length);
  createBoard();
  updateBoard();
}

function createBoard(){
  for (var i = 0; i < player1Array.length; i++){
    guesses.push("_");
  }
  //console.log(guesses);
}

function updateBoard(){
  document.getElementById("gameLetters").innerText = guesses;
}

function guessMade(){
  player2Guess = document.getElementById("guessText").value;
  console.log("Guess: " + player2Guess);
}