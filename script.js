'string';

/* eslint-env browser */

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('You need to guess a number bro!');
  } else if (guess === secretNumber) {
    displayMessage("Bro,you guessed my number! You're an absolute chad!");
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High Bro!' : 'Too Low Bro!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`Bro you suck, Game Over! My number was ${secretNumber}`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
  displayMessage('Start guessing bro...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})