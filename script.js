let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)
const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++
}
function advanceRound() {
  currentRoundNumber++;
}

const guessCheck = number => number >= 0 && number <= 9 ? true : false
const compareGuesses = (humanGuess, compGuess, targetNumber) => {
  let numberCheck = guessCheck(humanGuess);
  if(!numberCheck) {
    return window.alert('It’s not possible to set a number outside this range')
  }
  if(humanGuess === compGuess) {
    return true;
  }
  if(humanGuess === targetNumber) {
    return true;
  }
  if(compGuess === targetNumber) {
    return false;
  }
  let humanDiff = Math.abs(humanGuess - targetNumber)
  let compDiff = Math.abs(compGuess - targetNumber)
  if(humanDiff < compDiff) {
    return true;
  }
  else {
    return false;
  }
}
// alert("Hello! I am an alert box!");
console.log(compareGuesses(5,5,8))

