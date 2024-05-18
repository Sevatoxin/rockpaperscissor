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
let playerScore = 0;
let computerScore = 0;
let winner = "";

//Storing play buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playButtons = [rock, paper, scissor];

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

//Setting up the page for playing


// function getPlayerChoice(choice) {
//     let choice = prompt("Please select rock'r', paper'p' or scissor's'");

//     //Check if player actually inputs one of the game choices. If not, ask again
//     switch (choice) {
//         case "r":
//             playerChoice = choice;
//             break
            
//         case "p":
//             playerChoice = choice;
//             break
            
//         case "s":
//             playerChoice = choice;
//             break
            
//         default:
//             console.log("Please enter (r) for rock, (p) for paper or (s) for scissor.");
//             getPlayerChoice();
//     }
//     return choice
// }

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
    if (playerChoice == computerChoice) {
        console.log("You tied!")
    }
    else {
        if (playerChoice == "rock" && computerChoice == "scissor") {
            console.log("You won!")
            playerScore++
        }
        else if (playerChoice == "rock" && computerChoice == "paper") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "scissor" && computerChoice == "rock") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "scissor" && computerChoice == "paper") {
            console.log("You won!")
            playerScore++
        }
        else if (playerChoice == "paper" && computerChoice == "scissor") {
            console.log("You loose!")
            computerScore++
        }
        else if (playerChoice == "paper" && computerChoice == "rock") {
            console.log("You won!")
            playerScore++
        }
    }
}

// function playGame() {
//     //Welcome player to the game
//     console.log("Welcome to Rock, Paper, Scissor within your Browser Console.")

//     for (let rounds = 0; rounds < 5; rounds++) {
//         round = rounds;
//         round++;
//         console.log("Round: " + round.toString())
//         playRound(getPlayerChoice(), getComputerChoice())
//     }

//     //Finish
//     console.log("Thanks for playing! You scored: " + playerScore + ". The computer scored: " +
//     computerScore + ".");
// }