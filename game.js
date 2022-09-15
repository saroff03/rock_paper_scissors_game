const choices = ["ROCK", "PAPER", "SCISSORS"];

function computerChoice(){
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playerChoice(){
  const playerChoice = prompt("Type ROCK, PAPER or SCISSORS. Capitalization does not matter but spelling does!");
  const input = playerChoice.toUpperCase();
  return input;
}

function checkWinner(playerChoice, computerChoice){
  if(playerChoice == computerChoice){
    return "tie"
  }
  else if(
    (playerChoice == "ROCK" && computerChoice == "PAPER") ||
    (playerChoice == "PAPER" && computerChoice == "SCISSORS") ||
    (playerChoice == "SCISSORS" && computerChoice == "ROCK")){
    return "computer";
    }
  else{
    return "player"
  }
}

function playRound(playerChoice, computerChoice){
  const result = checkWinner(playerChoice, computerChoice);
  if(result == "tie"){
    return "The round is Tie!"
  }
  else if(result == "computer"){
    return `You lost! ${computerChoice} beats ${playerChoice}.`
  }
  else{
    return `You won! ${playerChoice} beats ${computerChoice}`
  };
}

var playerChoice = "ROCK" ;                               //testing
var computerChoice = computerChoice();                    //to see 
console.log(playRound(playerChoice, computerChoice));     //if it works correctly