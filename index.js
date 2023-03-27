let player = document.getElementById('player')
let computer = document.getElementById('computer')
let rock = document.getElementById('rock').addEventListener('click', ()=>{playRound("rock", getComputerChoice())});
let paper = document.getElementById('paper').addEventListener('click', ()=>{playRound("paper",getComputerChoice())});
let scissors = document.getElementById('scissors').addEventListener('click', ()=>{playRound("scissors",getComputerChoice())});

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
 return console.log( "You tied!")
  }
  if(playerSelection === "rock"){
    if(computerChoice === "paper"){
    return console.log("Computer Wins!");
    }else{
    return console.log( "You won!")
    }
  }
    if(playerSelection ==="paper"){
      if(computerChoice === "scissors"){
      return console.log("You won!")
      }else{
       return console.log( "Computer Won!")
      }
    }
    if(playerSelection === "scissors"){
      if(computerChoice === "rock"){
       return console.log("Computer Won!")
      }else {
         return console.log("You Won!")
      }
    }
  };


