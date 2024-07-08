// DOM elements
const playerOne = document.getElementById("playerOne"); // Gets the element with ID "playerOne"
let playersHealthBar = document.getElementById("playersHealthBar"); // Gets the element with ID "playersHealthBar"
let cpuHealthBar = document.getElementById("cpuHealthBar"); // Gets the element with ID "cpuHealthBar"

// RPS Button - DOM
let rockBtn = document.getElementById("rockBtn"); // Gets the element with ID "rockBtn"
let paperBtn = document.getElementById("paperBtn"); // Gets the element with ID "paperBtn"
let scissorsBtn = document.getElementById("scissorsBtn"); // Gets the element with ID "scissorsBtn"

// Initial Health Values
let playerHealth = 100; // Sets initial player health to 100
let cpuHealth = 100; // Sets initial CPU health to 100

// Add event listeners to buttons
rockBtn.addEventListener("click", function () {
  playGameFunction("Rock"); // Calls playGame function with player choice "Rock" when rockBtn is clicked
});

paperBtn.addEventListener("click", function () {
  playGameFunction("Paper"); // Calls playGame function with player choice "Paper" when paperBtn is clicked
});

scissorsBtn.addEventListener("click", function () {
  playGameFunction("Scissors"); // Calls playGame function with player choice "Scissors" when scissorsBtn is clicked
});

//functions 

// Function to randomly select a choice for the CPU (Rock, Paper, or Scissors)
function cpuChoiceFunction() {
  const cpuRpsChoices = ["Rock", "Paper", "Scissors"]; // Array of CPU choices
  const randomIndex = Math.floor(Math.random() * cpuRpsChoices.length); // Generates random index
  return cpuRpsChoices[randomIndex]; // Returns CPU's random choice
}

// Game logic
function playGameFunction(playerChoice) {
  let cpuChoice = cpuChoiceFunction(); // Gets CPU's choice using CPUChoice function

  // Compare playerChoice and cpuChoice to determine the result
  if (playerChoice === cpuChoice) {
    console.log(`Tie`); // Logs tie if playerChoice equals cpuChoice
  } else if (
    (playerChoice === "Rock" && cpuChoice === "Scissors") || // Checks if player wins with Rock against Scissors
    (playerChoice === "Paper" && cpuChoice === "Rock") || // Checks if player wins with Paper against Rock
    (playerChoice === "Scissors" && cpuChoice === "Paper") // Checks if player wins with Scissors against Paper
  ) {
    console.log("You Win"); // Logs "You Win" if player wins
    cpuHealth -= 20; // Reduces CPU's health by 10
    cpuHealthBar.textContent = `Health Bar - ${cpuHealth}` // Updates CPU health bar text content
    console.log("CPU Health: " + cpuHealth); // Logs CPU's remaining health
    
    // After determining the result, check if the game is overi
    checkGameOverFunction(); // Calls checkGameOver function
  } else {
    playerHealth -= 20; // Reduces player's health by 10 if CPU wins
    playersHealthBar.textContent = `Health Bar - ${playerHealth}` // Updates player health bar text content
    console.log("Player Health: " + playerHealth); // Logs player's remaining health
    console.log("You lose"); // Logs "You lose" if CPU wins
    
    // After determining the result, check if the game is over
    checkGameOverFunction(); // Calls checkGameOver function
  }
}

// Check if the game is over
function checkGameOverFunction() {
  if (playerHealth <= 0) { // Checks if player's health is zero or less
    alert("Game Over! CPU wins!"); // Shows alert that CPU wins
    resetGameFunction(); // Calls resetGame function to reset the game
  } else if (cpuHealth <= 0) { // Checks if CPU's health is zero or less
    alert("Congratulations! You win!"); // Shows alert that player wins
    resetGameFunction(); // Calls resetGame function to reset the game
  }
}

// Reset game state
function resetGameFunction() {
  playerHealth = 100; // Resets player's health to 100
  cpuHealth = 100; // Resets CPU's health to 100
  playersHealthBar.textContent = `Health Bar - ${playerHealth}`; // Updates player health bar text content
  cpuHealthBar.textContent = `Health Bar - ${cpuHealth}` // Updates CPU health bar text content
}

