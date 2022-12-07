// Wait for the DOM to finish loading before running the game
/**
 * Declare constants for possible choices
 */

const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the playerchoice has been processed
 */

function runGame(playerChoice){
    const playerImage = document.getElementById("player-image")
    const computerImage = document.getElementById("computer-image")

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
 
    // creates random choices for computerchoice
    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkWinner();
}

/*function checkResult() {

    let message = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(message);
}*/

/**
 * This function checks who is the winner between player and computer
 */
function checkWinner() {

    let result = document.getElementById("results");

      if (playerChoice == "rock" && computerChoice == "paper") {
        result.innerHTML = "Hey! You Lose!";
    }
      else if (playerChoice == "rock" && computerChoice == "scissors") {
      result.innerHTML = "Hey! You Win!";
    }
       else if (playerChoice == "paper" && computerChoice == "rock") {
        result.innerHTML = "Hey! You Win!";
    }
       else if (playerChoice == "paper" && computerChoice == "scissors") {
        result.innerHTML = "Hey! You Lose!";
    }
       else if (playerChoice == "scissors" && computerChoice == "paper") {
        result.innerHTML = "Hey! You Win!";
    }
       else if (playerChoice == "scissors" && computerChoice == "rock") {
        result.innerHTML = "Hey! You Lose!";
    }
       else {
        result.innerHTML = "Draw!";
       }
}
function incrementPlayerScore() {

}

function incrementComputerScore() {

}