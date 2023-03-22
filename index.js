const getComputerChoice = () => {
const randomChoice = Math.floor(Math.random()  * 3)
if(randomChoice === 0) {
    console.log("rock")
}else if(randomChoice === 1){
    console.log("paper")
}else {
    console.log("scissors")
}
};

const playRound = (playerSelection, computerSelection) => {
const select = playerSelection.toLowerCase()
if(select === 'rock'){
    if(computerSelection === 'paper'){
    }
    return "Paper covers Rock. Computer wins!"
}
if(select === 'scissors'){
    if(computerSelection === 'paper'){
    }
    return "Scissors cuts paper. Player wins!"
}

}

const game = () => {
    for (let i = 0; i < 5; i++) {
playRound()
 }
}


const computerSelection = getComputerChoice();
const playerSelection = prompt("Please enter rock, paper, or scissors");
console.log(playRound(playerSelection, computerSelection))

