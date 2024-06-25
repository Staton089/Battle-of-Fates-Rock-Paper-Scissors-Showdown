//DOM
const playerOne = document.getElementById("playerOne"); // <h3 id="playerOne">Player 1 - {UserName}</h3>
let playersHealthBar = document.getElementById("playersHealthBar"); // <p id="playersHealthBar">Health Bar - 100</p>
let cpuHealthBar = document.getElementById("cpuHealthBar"); // <p id="CpuHealthBar">Health Bar - 100</p>

//RPS Button - DOM
let rockBtn = document.getElementById("rockBtn"); // <li id="rockBtn">Rock</li>
let paperBtn = document.getElementById("paperBtn"); // <li id="paperBtn">Paper</li>
let scissorsBtn = document.getElementById("scissorsBtn"); // <li id="scissorsBtn">Scissors</li>

// Initial Health Values
let playerHealth = 100;
let cpuHealth = 100;

// add event listener
// Add event listener
rockBtn.addEventListener("click", function(){
  playGame("Rock");
})

// ALL Function Here:
// CPU Choices -  Function to randomly select a choice for the CPU (Rock, Paper, or Scissors).
function CPUChoice() {
  // Define an array of choices for the CPU
  const cpuRpsChoices = ["Rock", "Paper", "Scissors"];

  // Generate a random index to select a move from cpuRpsChoices
  // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
  // We multiply it by cpuRpsChoices.length to get a random index within the array bounds
  const randomIndex = Math.floor(Math.random() * cpuRpsChoices.length);

  // Return the move corresponding to the randomly generated index
  return cpuRpsChoices[randomIndex];
}

/// Still on the logic for game 
// Game
function playGame(playerChoice) {
  if(playerChoice === CPUChoice()){
    console.log("Tie")
  }

}

// Check if the game is over
function checkGameOver() {
  if (playerHealth <= 0) {
    alert("Game Over! CPU wins!");
    resetGame();
  } else if (cpuHealth <= 0) {
    alert("Congratulations! You win!");
    resetGame();
  }
}
// Reset Game
function resetGame() {
  playerHealth = 100;
  cpuHealth = 100;
  updateHealthBars();
}
