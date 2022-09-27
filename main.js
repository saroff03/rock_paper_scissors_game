const choices = ["ROCK", "PAPER", "SCISSORS"];
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const p = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

function computerChoice(){
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
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
    return "player";
  }
}

function checkForWinner(playerScore, computerScore){
  if (playerScore === 5){
    const h1 = document.createElement("h1");
    h1.innerText = `Congratulations! You beat the computer ${playerScore} to ${computerScore} !`;
    outcomeDiv.appendChild(h1);
  }
  if (computerScore === 5){
    const h1 = document.createElement("h1");
    h1.innerText = `You lost. Computer beats you ${computerScore} to ${playerScore}`;
    outcomeDiv.appendChild(h1);
  }
}

function playRound(playerChoice, computerChoice){
  switch(checkWinner(playerChoice,computerChoice)){
    case "tie":
      p.innerText = `The round is tie!`;
      outcomeDiv.appendChild(p);
      break;
    case "computer":
      p.innerText = `You lost. ${computerChoice} beats ${playerChoice}.`;
      outcomeDiv.appendChild(p);
      computerScore++;
      break;
    case "player":
      p.innerText = `You won! ${playerChoice} beats ${computerChoice}.`
      outcomeDiv.appendChild(p);
      playerScore++;
      break;
  }
}

rockButton.addEventListener('click', () => {
  const playerChoice = "ROCK";
  playRound(playerChoice, computerChoice());
  checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
  const playerChoice = "PAPER";
  playRound(playerChoice, computerChoice());
  checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
  const playerChoice = "SCISSORS";
  playRound(playerChoice, computerChoice());
  checkForWinner(playerScore, computerScore);
})