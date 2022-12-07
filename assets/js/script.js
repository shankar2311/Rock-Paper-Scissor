// Wait for the DOM to finish loading before running the game
/**
 * Declare constants for possible choices
 */

const choices = ["rock", "paper", "scissor"]

// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute("data-type");
            alert(`you clicked ${playerChoice}`);
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the playerchoice has been processed
 */

function runGmae(){
 
    // creates random choices for computerchoice
    let computerChoice = Math.floor(Math.random() * 3);
}

function checkResult() {

}

function checkWinner() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}