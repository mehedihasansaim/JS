function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `Your Choice: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').innerText = `Computer's Choice: ${capitalize(computerChoice)}`;
  document.getElementById('winner').innerText = `Result: ${getWinner(userChoice, computerChoice)}`;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
