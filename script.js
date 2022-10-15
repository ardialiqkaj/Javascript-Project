function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      let computerHand = ["rock", "paper", "scissors"];

      function computerPlay() {
        return computerHand[Math.floor(Math.random() * computerHand.length)];
      }

      computerSelection = computerPlay();
      //console.log(computerSelection);

      function playerRound() {
        var playerInput = prompt("Select rock, paper or scissors:");
        return playerInput;
      }

      let b = playerRound();
      playerSelection = b.toLowerCase();

      //console.log(playerSelection);

      if (computerSelection === playerSelection) {
        message = "Draw";
      } else if (
        computerSelection === "rock" &&
        playerSelection === "scissors"
      ) {
        message = `You lost because ${computerSelection} beats ${playerSelection}`;
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "paper"
      ) {
        message = `You lost because ${computerSelection} beats ${playerSelection}`;
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        message = `You lost because ${computerSelection} beats ${playerSelection}`;
      } else if (
        computerSelection === "scissors" &&
        playerSelection === "rock"
      ) {
        message = `You won because ${playerSelection} beats ${computerSelection}`;
      } else if (
        computerSelection === "paper" &&
        playerSelection === "scissors"
      ) {
        message = `You won because ${playerSelection} beats ${computerSelection}`;
      } else if (computerSelection === "rock" && playerSelection === "paper") {
        message = `You won because ${playerSelection} beats ${computerSelection}`;
      } else {
        i--;
        message =
          "Please select a valid option: 'rock', 'paper' or 'scissors'!";
      }
      console.log(message);
      return message;
    }

    let a = playRound();
    if (a === "You lost because rock beats scissors") {
      computerScore++;
    } else if (a === "You lost because scissors beats paper") {
      computerScore++;
    } else if (a === "You lost because paper beats rock") {
      computerScore++;
    } else if (a === "You won because rock beats scissors") {
      playerScore++;
    } else if (a === "You won because scissors beats paper") {
      playerScore++;
    } else if (a === "You won because paper beats rock") {
      playerScore++;
    } else if (a === "Draw") {
      playerScore = playerScore;
    } else if (
      a === "Please select a valid option: 'rock', 'paper' or 'scissors'!"
    ) {
      playerScore = playerScore;
    } else {
      //i--;
      playerScore = "Something went wrong. Please refresh and restart!";
    }
    //return playerScore;
    console.log(playerScore, computerScore);
  }

  if (playerScore > computerScore) {
    return `Congratulations! You won. The result is: ${playerScore} for you and ${computerScore} for the computer`;
  } else if (playerScore < computerScore) {
    return `Sorry, you lost. The result is: ${playerScore} for you and ${computerScore} for the computer`;
  }
}

console.log(game());
