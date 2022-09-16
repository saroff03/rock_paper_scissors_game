const choices = ["ROCK", "PAPER", "SCISSORS"];

function computerChoice(){
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("Type ROCK, PAPER or SCISSORS. Capitalization does not matter but spelling does!");
    if(choice == null){
      continue;
    }
    const choiceInUpper = choice.toUpperCase();
    if(choices.includes(choiceInUpper)){
      validatedInput = true;
      return choiceInUpper;
    }
  }
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

function game(){
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("------------------");
    if(checkWinner(playerSelection, computerSelection) == "player"){
      scorePlayer++;
    }
    else if(checkWinner(playerSelection,computerSelection) == "computer"){
      scoreComputer++;
    }
  }
    console.log("Game over!")

    if(scorePlayer > scoreComputer){
      console.log("Player is the winner!")
    }
    else if(scorePlayer < scoreComputer){
      console.log("Computer is the winner!")
    }
    else{
      console.log("We have a tie!")
    }
  
}

game();
