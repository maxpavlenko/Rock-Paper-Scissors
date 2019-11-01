const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
  return userInput;
} else {
  console.log('Error!');
}
};

//console.log(getUserChoice('Paper')); - Player's chocse

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//console.log(getComputerChoice()); - Computer get random number

const determineWinner = (userChoice, computerChoice) => {
  
if (userChoice === 'bomb') {
  return 'You destroyed your opponent! Congrats!';
}
  
  if (userChoice === computerChoice) {
    return 'The game is tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won!';
    }
    else{
      return 'User won!';
    }
  }
    if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won!';
    }
    else{
      return 'User won!';
    }
  }
      if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won!';
    }
    else{
      return 'User won!';
    }
  }
}
//console.log(determineWinner('paper', 'scissors')) - test game

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('Your choice is: ' + userChoice);
  console.log('Computer choice is: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();

//console.log(playGame());


