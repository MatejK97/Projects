const choices = ['rock', 'paper', 'scissors'];
let winners = [];

const game = () => {
  for (let i = 1; i <= 5; i++) {
    playGame(i);
  }
  document.querySelector('button').textContent = 'Play new game';
  logWins();
};
function playGame(round) {
  const computerSelection = computerChoice();
  const playerSelection = playerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}
const computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};
const playerChoice = () => {
  input = prompt('Input either rock, paper or scissors:');
  input = input.toLowerCase();
  while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
    input = prompt('Try again:');
  }
  while (input == null) {
    input = prompt('Input either rock, paper or scissors');
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
      input = input.toLowerCase();
      input = prompt('Try again:');
    }
  }
  return input;
};
const checkWinner = (choiceP, choiceC) => {
  if (choiceP === choiceC) {
    return 'Tie';
  } else if (
    (choiceP === 'rock' && choiceC == 'scissors') ||
    (choiceP === 'paper' && choiceC == 'rock') ||
    (choiceP === 'scissors' && choiceC == 'paper')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
};
function logWins() {
  let playerWins = winners.filter((item) => item == 'Player').length;
  let computerWins = winners.filter((item) => item == 'Computer').length;
  let ties = winners.filter((item) => item == 'Tie').length;
  console.log('Results:');
  console.log('Player wins:', playerWins);
  console.log('Computer wins:', computerWins);
  console.log('Ties:', ties);
}
function logRound(playerChoice, computerChoice, winner, round) {
  console.log('Round:', round);
  console.log('Player chose:', playerChoice);
  console.log('Computer chose:', computerChoice);
  console.log(winner, 'Won the round');
}
