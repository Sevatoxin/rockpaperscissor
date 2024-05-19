// Rock Paper Scissor
// Game is played in 5 rounds
// Game is played in console
// Player needs to decide what to pick
// Computer decides what it picks
// Both picks need to be compared
// Result needs to be tracked.

// UI Branch
// Reworking the game to be able to be played with buttons.
// An UI will be added, so the game is not a console game anymore.

//  How to play RPS with UI:
//The player selects their choice with a button
//Computer selects randomly
//A winner is choosen as soon as someone has 5 points
//Extra rule: a tie gives 0.5 points

//Set the scores to 0 at the beginning
let playerChoice = "";
let playerScore = 0.0;
let computerScore = 0.0;
let winner = "";

//Storing play buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playButtons = [rock, paper, scissor];

//Storing score tags
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

//Storing Winner Announcement Element
const winnerElement = document.querySelector(".winner");

playerScoreElement.textContent = `Your Score: ${playerScore}`;
computerScoreElement.textContent = `Computer Score: ${computerScore}`;

//Add eventListener to each playbutton
playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //Saves player choice
        playerChoice = button.id;
        playRound(playerChoice, getComputerChoice());
        console.log(playerChoice);
    });
});

//Add style to each playbutton
playButtons.forEach((button) => {
    button.setAttribute("style", "padding: 2px 6px;");
});

//Function to create a random integer between 0 and max
function getRandomInt (max) {
    return Math.floor(Math.random() * max)
}


//Get computer choice based on a random number (0, 1 or 2)
function getComputerChoice () {
    let choice = getRandomInt(3)

    switch (choice) {
        case 0:
            choice = "rock";
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissor"
            break
    }

    return choice
}

function playRound(playerChoice, computerChoice) {
    //Tie logic
    if (playerChoice == computerChoice) {
        winnerElement.textContent = `TIE! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
        playerScore += 0.5;
        computerScore += 0.5;
    }
    //Non Tie Logic to get who won
    else {
        if (playerChoice == "rock" && computerChoice == "scissor") {
            winnerElement.textContent = `WON! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            playerScore++
        }
        else if (playerChoice == "rock" && computerChoice == "paper") {
            winnerElement.textContent = `LOST! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            computerScore++
        }
        else if (playerChoice == "scissor" && computerChoice == "rock") {
            winnerElement.textContent = `LOST! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            computerScore++
        }
        else if (playerChoice == "scissor" && computerChoice == "paper") {
            winnerElement.textContent = `WON! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            playerScore++
        }
        else if (playerChoice == "paper" && computerChoice == "scissor") {
            winnerElement.textContent = `LOST! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            computerScore++
        }
        else if (playerChoice == "paper" && computerChoice == "rock") {
            winnerElement.textContent = `WON! You choose: ${playerChoice.toUpperCase()}. Computer choose: ${computerChoice.toUpperCase()}.`
            playerScore++
        }
    }

    //Update scores
    playerScoreElement.textContent = `Your Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;

    //Game winning logic
    if (playerScore > 5) {
        winnerElement.textContent = "You got a Score of 5 and WON! Reload the page to start again.";
    };
    if (computerScore > 5) {
        winnerElement.textContent = "Computer got a Score of 5 and you LOST! Reload the page to start again.";
    };
}