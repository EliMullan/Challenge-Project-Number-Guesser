let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
//generate the new secret target number.
const generateTarget = () => {
    let randomNum = Math.floor(Math.random() * 9);
    return randomNum;
}

//calculate absolute distance from target 
const getAbsoluteDistance = (start, target) => {
  return Math.abs(start - target);
}

//determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, target) => {
    if ( humanGuess < 0 || humanGuess > 9) {
      alert (`Please input a number between 0 and 9`);
    }
    return getAbsoluteDistance(humanGuess, target) <= getAbsoluteDistance(computerGuess, target) ? true : false;
}

//increase the winner’s score after each round.
const updateScore = winner => {    
    winner == 'human' ? humanScore++ : computerScore++;
}

//update the round number after each round
const advanceRound = () => {
    currentRoundNumber++;
}
