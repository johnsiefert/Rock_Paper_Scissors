const player = document.getElementById('player')
const computer = document.getElementById('computer')
const rock = document.getElementById('rock').addEventListener('click', ()=>{playRound("rock", getComputerChoice())});
const paper = document.getElementById('paper').addEventListener('click', ()=>{playRound("paper",getComputerChoice())});
const scissors = document.getElementById('scissors').addEventListener('click', ()=>{playRound("scissors",getComputerChoice())});
const result = document.querySelector('.result');
const content = document.createElement('div');
const score = document.querySelector('.scoreboard');
let playerScore = 0;
let computerScore = 0;

  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
      return "rock";
    }else if(randomNumber === 1){
      return "paper";
    }else if(randomNumber ===2){
      return "scissors";
    }else{
      return 'Error'
    }
  };



  function playRound (playerSelection, computerChoice)  {
    if(playerSelection === computerChoice){
    content.textContent = "You tied!";
    result.appendChild(content);
    }
  if(playerSelection === "rock"){
    if(computerChoice === "paper"){
        computerScore++
        updateScore(playerScore, computerScore)
        player.textContent = `Computer Score:  ${computerScore++} vs  Player Score: ${playerScore}`
        score.appendChild(player)
    }else{
        player.textContent = playerScore++
        updateScore(playerScore, computerScore)
        player.textContent = `Player Score: ${playerScore++} vs  Computer Score: ${computerScore}`
        score.appendChild(player)
    }
  }
    if(playerSelection ==="paper"){
      if(computerChoice === "scissors"){
        player.textContent = playerScore++
        updateScore(playerScore, computerScore)
        player.textContent = `Player Score ${playerScore++} vs  Computer Score: ${computerScore}`
       score.appendChild(player)
      }else{
        computerScore++
        updateScore(playerScore, computerScore)
        player.textContent = `Computer Score:  ${computerScore++} vs  Player Score: ${playerScore}`
        score.appendChild(player)
      }
    }
    if(playerSelection === "scissors"){
      if(computerChoice === "rock"){
computerScore++
updateScore(playerScore, computerScore)
player.textContent = `Computer Score:  ${computerScore++} vs  Player Score: ${playerScore}`
score.appendChild(player)
      }else {
        player.textContent = playerScore++
        updateScore(playerScore, computerScore)
        player.textContent = `Player Score: ${playerScore++} v  Computer Score: ${computerScore}`
        score.appendChild(player)
      }
    }

  };

  function updateScore(playerScore, computerScore){
    if(playerScore === 5){
        content.textContent = "Player Defeated You!!!!!"
        player.textContent = `Player Wins!!
        Player Score:${playerScore++} vs  Computer Score: ${computerScore}`
        score.appendChild(player)

    }else if(computerScore === 5) {
        content.textContent = "Computer Defeated You!!!!!"
         result.appendChild(content);
         score.appendChild(computer)
    }
}

