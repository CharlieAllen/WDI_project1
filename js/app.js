$(function(){

  var player1Word;
  var player1Array = [];
  var guesses = [];
  var player2Guess = [];
  var livesLeft = 0;
  var lettersTried = [];
  var start = document.getElementById("gameStart");
  start.addEventListener('click', wordPrompt);

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
    console.log(player1Array.indexOf(player2Guess), player1Array, player2Guess);
    if(player1Array.indexOf(player2Guess) !== -1) {

      for (var i = 0; i < player1Array.length; i++){
        if (player2Guess == player1Array[i]) {
          guesses[i] = player1Array[i];
          letterMatch = true;
          checkForWin();
          drawBoard();
        }
      }
    } else {
      console.log("NO MATCH");
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
    alert("You win!");
    return true;
  }

  function checkForLose(){
    if (livesLeft == 0)
      alert("You lose!");
  }

  function alreadyUsed(){
    document.getElementById("lettersTried").innerText = "Letters already used: " + lettersTried;
  }

  $('button').on("click", function(event){
      handleForm(event);
  });
});


