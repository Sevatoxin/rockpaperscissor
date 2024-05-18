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
let playerScore = 0;
let computerScore = 0;


//Start playing the game
playGame()

function getPlayerChoice() {
    let choice = prompt("Please select rock'r', paper'p' or scissor's'");

    //Check if player actually inputs one of the game choices. If not, ask again
    switch (choice) {
        case "r":
            playerChoice = choice;
            break
            
        case "p":
            playerChoice = choice;
            break
            
        case "s":
            playerChoice = choice;
            break
            
        default:
            console.log("Please enter (r) for rock, (p) for paper or (s) for scissor.");
            getPlayerChoice();
    }
    return choice
}

//Function to create a random integer between 0 and max
function getRandomInt (max) {
    return Math.floor(Math.random() * max)
}


//Get computer choice based on a random number (0, 1 or 2)
function getComputerChoice () {
    let choice = getRandomInt(3)

    switch (choice) {
        case 0:
            choice = "r";
            break
        case 1:
            choice = "p"
            break
        case 2:
            choice = "s"
            break
    }

    return choice
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("You tied!")
    }
    else {
        if (playerChoice == "r" && computerChoice == "s") {
            console.log("You won!")
            playerScore++
        }
        else if (playerChoice == "r" && computerChoice == "p") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "s" && computerChoice == "r") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "s" && computerChoice == "p") {
            console.log("You won!")
            playerScore++
        }
        else if (playerChoice == "p" && computerChoice == "s") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "p" && computerChoice == "r") {
            console.log("You won!")
            playerScore++
        }
    }
}

function playGame() {
    //Welcome player to the game
    console.log("Welcome to Rock, Paper, Scissor within your Browser Console.")

    for (let rounds = 0; rounds < 5; rounds++) {
        round = rounds;
        round++;
        console.log("Round: " + round.toString())
        playRound(getPlayerChoice(), getComputerChoice())
    }

    //Finish
    console.log("Thanks for playing! You scored: " + playerScore + ". The computer scored: " +
    computerScore + ".");
}