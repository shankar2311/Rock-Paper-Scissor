// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/**
 * Declare constants for possible choices
 */

const choices = ["rock", "paper", "scissor"]

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let playerChoice = this.getAttribute("data-choice");
            alert(`you clicked ${playerChoice}`);
        })
    }
})


function runGmae(){

}

function checkResult() {

}

function checkWinner() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}