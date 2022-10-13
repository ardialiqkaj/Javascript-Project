let computerHand = ["rock", "paper", "scissors"];

function computerPlay() {
  return computerHand[Math.floor(Math.random() * computerHand.length)];
}

console.log(computerPlay());
