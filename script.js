const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceDisplay.textContent = `You: ${emojis[userChoice]}`;
  computerChoiceDisplay.textContent = `Computer: ${emojis[computerChoice]}`;

  const result = getResult(userChoice, computerChoice);
  resultMessage.textContent = result;
}

function getResult(user, comp) {
  if (user === comp) return "🤝 It's a tie!";
  if (
    (user === 'rock' && comp === 'scissors') ||
    (user === 'scissors' && comp === 'paper') ||
    (user === 'paper' && comp === 'rock')
  ) {
    return "🎉 You win!";
  }
  return "💻 Computer wins!";
}
