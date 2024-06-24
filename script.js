//DOM
const playerOne = document.getElementById("playerOne");//<h3 id="playerOne">Player 1 - {UserName}</h3>
let playersHealthBar = document.getElementById("playersHealthBar");//<p id="playersHealthBar">Health Bar - 100</p>
let CpuHealthBar = document.getElementById("CpuHealthBar");//<h3 id="CpuHealthBar">Player 2 - CPU</h3>


console.log(playerOne)

// ALL Function Here:
// CPU Choices -  Function to randomly select a choice for the CPU (Rock, Paper, or Scissors).
function CPUChoice() {
    // Define an array of choices for the CPU
    const cpuRpsChoices = ['Rock', 'Paper', 'Scissors'];
    
    // Generate a random index to select a move from cpuRpsChoices
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // We multiply it by cpuRpsChoices.length to get a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * cpuRpsChoices.length);
    
    // Return the move corresponding to the randomly generated index
    return cpuRpsChoices[randomIndex];
}

console.log(CPUChoice())


//code thats not done yet 

while (condition) {
    
}