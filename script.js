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
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    message = `You lost because ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    message = `You lost because ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    message = `You lost because ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    message = `You won because ${playerSelection} beats ${computerSelection}`;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    message = `You won because ${playerSelection} beats ${computerSelection}`;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    message = `You won because ${playerSelection} beats ${computerSelection}`;
  } else {
    message = "Something went wrong. Please refresh and select a valid option";
  }

  return message;
}

//console.log(playRound());

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

console.log(game());
