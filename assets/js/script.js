// Wait for the DOM to finish loading before running the game
/**
 * Declare constants for possible choices
 */
 let buttons = document.getElementsByTagName("button");
 const playerImage = document.getElementById("player-image")
 const computerImage = document.getElementById("computer-image")
 let result = document.getElementById("results");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the playerchoice has been processed
 */

function runGame(playerChoice){
 

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
 
    // creates random choices for computerchoice
    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkWinner();
}

/**
 * This function checks who is the winner between player and computer
 */
function checkWinner() {

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