$(function(){

  var player1Word;
  var player1Array = [];
  var guesses = [];
  var player2Guess = [];
  var livesLeft = 0;
  var lettersTried = [];
  var start = document.getElementById("gameStart");
  start.addEventListener('click', wordPrompt);
  var isGameFinished = false;

  $('form').on('submit', function(event) {
    handleForm(event);
  });

  function handleForm(event) {
    event.preventDefault();
    player2Guess = document.getElementById("guessText").value;

    lettersTried.push(player2Guess);
    document.getElementById("guessText").value = "";
    checkForMatch();
  }

  function wordPrompt(){
    player1Word = prompt("What is your chosen word, Player One?");

    if(!player1Word) {
      return;
    }

    player1Array = player1Word.split('');
    createBoard();
    drawBoard();
    setInitialLives();
    drawLives();
  }

  function createBoard(){
    guesses = [];
    for (var i = 0; i < player1Array.length; i++){
      guesses.push("_");
    }
  }

  function setInitialLives(){
    livesLeft = player1Array.length -1;
  }

  function drawLives(){
    document.getElementById("counter").innerText = "You have " + livesLeft + " goes left";
  }

  function drawBoard(){
    document.getElementById("gameLetters").innerText = guesses;
  }

  function checkForMatch(){
    if (isGameFinished == true){
      alert("The game is over");
      return;
    }
    //console.log(player1Array.indexOf(player2Guess), player1Array, player2Guess);
    if(player1Array.indexOf(player2Guess) !== -1) {

      for (var i = 0; i < player1Array.length; i++){
        if (player2Guess == player1Array[i]) {
          guesses[i] = player1Array[i];
          letterMatch = true;
          drawBoard();
          checkForWin();
        }
      }
    } else {
      livesLeft = livesLeft -1;
      drawLives();
      alreadyUsed();
      checkForLose();
    }
  }

  function checkForWin(){
    for (var i = 0; i < player1Array.length; i++) {
      if (guesses[i] == "_")
        return false;
    }
    isGameFinished = true;
    alert("You win!");
    document.getElementById("gameRestart").style.visibility = "visible";
    return true;
  }

  function checkForLose(){
    if (livesLeft == 0) {
      isGameFinished = true;
      alert("You lose!");
      document.getElementById("gameRestart").style.visibility = "visible";
    }
  }

  function alreadyUsed(){
    document.getElementById("lettersTried").innerText = "Letters already used: " + lettersTried;
  }

  $('button').on("click", function(event){
      handleForm(event);
  });

  document.getElementById("gameRestart").style.visibility = "hidden";

  document.getElementById("gameRestart").addEventListener('click', gameRestart);

  function gameRestart(){
    location.reload();
    console.log("gamerestart firing");
  }

});


