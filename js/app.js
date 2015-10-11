var player1Word;
var player1Array;
var guesses = [];
var player2Guess = [];
var livesLeft = 0;

function wordPrompt(){
  // this takes the word input by player1 from the prompt and stores it as player1Word
  player1Word = prompt("What is your chosen word, Player One?");
  // console.log(player1Word);
  // this splits player1Word into an array called player1Array
  player1Array = player1Word.split("");
  //console.log(player1Array);
  //console.log(player1Array.length);
  // this calls this the function createBoard which will make the array of underscores
  createBoard();
  // this calls the function updateBoard which will display on screen a board of 
  drawBoard();
  //  this will -1 from the length of player1Array to show player2 their lives
  setInitialLives();
  // will update player2 lives per incorrect guesses
  drawLives();
}

function createBoard(){
  // creates an array of underscores equivalent to the length of player1Array
  for (var i = 0; i < player1Array.length; i++){
    guesses.push("_");
  }
  //console.log(guesses);
}

function setInitialLives(){
  // show player2 lives left as 1 less than the length of player1Array
  livesLeft = player1Array.length -1;
}

function drawLives(){
  // updates the html element called counter with the livesLeft variable
  document.getElementById("counter").innerText = "You have " + livesLeft + " goes left";
}

function drawBoard(){
  // this function takes the guesses array and displays it on screen in the element called gameLetters
  document.getElementById("gameLetters").innerText = guesses;
}

  // player2Guess is called by the html button called guessButton, and takes the
  function guessMade(){
  // value in the html element guessText
  player2Guess = document.getElementById("guessText").value;
  //console.log("Guess: " + player2Guess);
  // replaces the value in the html guessText box with an empty string 
  document.getElementById("guessText").value = "";
  // invoking the checkForMatch function
  checkForMatch();
}

//it also ought to stop you from being able to input the same letter twice


function checkForMatch(){
  var letterMatch = false;
  //console.log("check for match works");
  // for checks the letter against all of those in player1Array
  for (var i = 0; i < player1Array.length; i +=1){
    //console.log(player2Guess + " " + player1Array[i]);
    // the current letter in player1Array is compared to player2Guess
    if (player2Guess == player1Array[i]) {
      // assigns the match from player1Array into the same place in the variable guesses
      guesses[i] = player1Array[i];
      // we now know that a letter has been matched so this will be recorded
      letterMatch = true;
      drawBoard();
      //console.log(guesses);
    }
  }
  if (letterMatch == false) {
    livesLeft = livesLeft -1;
    console.log(livesLeft);
    drawLives();
  }
  checkForWin();
  checkForLose();
}

function checkForWin(){
  // check to see if player2 has the same number of matches to letters stored
  // in player1's word - if yes, they have won & score is incremented
  for (var i = 0; i < player1Array.length; i++) {
    if (guesses[i] == "_")
      return false;
  }
  //console.log("you've won you clever thing!");
  alert("You win!");
  return true;
}

function checkForLose(){
  if (livesLeft == 0)
    alert("You lose!");
}

//for score it might actually be better to write a for loop which takes the number
//of letters in the array, -1 from it and shows that as the lives remaining?



