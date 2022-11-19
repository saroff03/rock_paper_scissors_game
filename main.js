const choices = ["ROCK", "PAPER", "SCISSORS"];
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const p = document.querySelector('p');
const playerScoreSpan = document.querySelector(".playerScoreSpan");
const computerScoreSpan = document.querySelector(".computerScoreSpan");
const modal = document.querySelector(".modal-container");
const rstGame = document.querySelector(".restartGame");
const modalP = document.querySelector(".modalP")
const playerIcon = document.getElementById("playerImg");
const computerIcon = document.getElementById("computerImg");
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
    modalP.innerHTML = `Congratulations!<br> You beat the computer ${playerScore} to ${computerScore}!`;
    toggleModal();
  }
  if (computerScore === 5){
    modalP.innerHTML = `You lost.<br> Computer beats you ${computerScore} to ${playerScore}.`;
    toggleModal();
  }
}

function playRound(playerChoice, computerChoice){
  updateComputerIcon(computerChoice);
  switch(checkWinner(playerChoice,computerChoice)){
    case "tie":
      p.innerHTML = `Tie! <br> The round is tie!`;
      break;
    case "computer":
      p.innerHTML = `You lost. <br> ${computerChoice} beats ${playerChoice}.`;
      computerScore++;
      break;
    case "player":
      p.innerHTML = `You won! <br> ${playerChoice} beats ${computerChoice}.`
      playerScore++;
      break;
  }
}

function updateScores(playerScore, computerScore){
  playerScoreSpan.innerText = `Player score: ${playerScore}`;
  computerScoreSpan.innerText = `Computer score: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
  playerIcon.src = "images/rock.png";
  const playerChoice = "ROCK";
  playRound(playerChoice, computerChoice());
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
  playerIcon.src = "images/paper.png";
  const playerChoice = "PAPER";
  playRound(playerChoice, computerChoice());
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
  playerIcon.src = "images/scissors.png";
  const playerChoice = "SCISSORS";
  playRound(playerChoice, computerChoice());
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore, computerScore);
})

function restartGame(){
  playerScore = 0;
  computerScore = 0;
  p.innerHTML = `Make a choice. <br> First to 5 points wins.`;
  playerScoreSpan.innerText = `Player score: 0`;
  computerScoreSpan.innerText = `Computer score: 0`;
  playerIcon.src = "images/default.png";
  computerIcon.src = "images/default.png";
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("show-modal");
}


rstGame.addEventListener("click", () => {
  restartGame();
});

function updateComputerIcon(computerChoice){
switch(computerChoice){
  case "ROCK":
    computerIcon.src = "images/rock.png"
    break;
  case "PAPER":
    computerIcon.src = "images/paper.png"
    break;
  case "SCISSORS":
    computerIcon.src = "images/scissors.png"
    break;
  default:
    computerIcon.src = "images/default.png"
}
}
