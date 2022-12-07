// Wait for the DOM to finish loading before running the game
/**
 * Declare constants for possible choices
 */
const buttons = document.getElementsByTagName("button");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const result = document.getElementById("results");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

// Get the button elements and add event listeners to them

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}


/**
 * The main game "loop", called when the script is first loaded
 * and after the playerchoice has been processed
 */

function runGame(playerChoice) {


    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    // creates random choices for computerchoice
    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkWinner(playerChoice, computerChoice);
}

/**
 * This function checks who is the winner between player and computer
 */
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice == "0" && computerChoice == "1") {
        result.innerHTML = "You Lost!";
        incrementComputerScore();
    } else if (playerChoice == "0" && computerChoice == "2") {
        result.innerHTML = "You Win!";
        incrementPlayerScore();
    } else if (playerChoice == "1" && computerChoice == "0") {
        result.innerHTML = "You Win!";
        incrementPlayerScore();
    } else if (playerChoice == "1" && computerChoice == "2") {
        result.innerHTML = "You Lost!";
        incrementComputerScore();
    } else if (playerChoice == "2" && computerChoice == "1") {
        result.innerHTML = "You Win!";
        incrementPlayerScore();
    } else if (playerChoice == "2" && computerChoice == "0") {
        result.innerHTML = "You Lost!";
        incrementComputerScore();
    } else {
        result.innerHTML = "Draw!";
    }
}

/**
 * Gets the current score and increments it by 1
 */
function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}