$(function(){

  var player1Word;
  var player1Array = [];
  var guesses = [];
  var player2Guess = [];
  var livesLeft = 0;
  var lettersTried = [];
  var start = document.getElementById("gameStart");
  var isGameFinished = false;

  $('form#newWordForm').on('submit', function(event) {
    event.preventDefault();
    wordPrompt();
  });

  $('form.guessForm').on('submit', function(event) {
    handleForm(event);
  });

  $("#newWordForm").hide();
  $("#startButton").on('click',function(){
    $("#newWordForm").show();
    $("#newWord").focus();
  });
  

  function handleForm(event) {
    event.preventDefault();
    player2Guess = document.getElementById("guessText").value;
    lettersTried.push(player2Guess);
    document.getElementById("guessText").value = "";
    checkForMatch();
  }

  function wordPrompt(){
    player1Word = document.getElementById("newWord").value;
    player1Array = player1Word.split('');
    $("#newWordForm").hide();
    $("#startButton").off();
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
    gameRestart();
    return true;
  }

  function checkForLose(){
    if (livesLeft == 0) {
      isGameFinished = true;
      alert("You lose!");
      gameRestart();
    }
  }

  function alreadyUsed(){
    document.getElementById("lettersTried").innerText = "Letters already used: " + lettersTried;
  }

  $('button').on("click", function(event){
    handleForm(event);
  });

  function gameRestart(){
    player1Word = "";
    player1Array = [];
    guesses = [];
    player2Guess = [];
    livesLeft = 0;
    lettersTried = [];
    isGameFinished = false;
    document.getElementById("counter").innerHTML = "</br>";
    document.getElementById("gameLetters").innerHTML = "</br>";
    $("#newWord").val("");
    document.getElementById("lettersTried").innerText = "";
    $("#startButton").on('click',function(){
      $("#newWordForm").show();
      $("#newWord").focus();
    });
  }

});


