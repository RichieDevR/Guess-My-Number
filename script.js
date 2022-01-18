'string';

/* eslint-env browser */

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let score = 10;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// TODO:  add sound effects
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is NO input
  if (!guess) {
    displayMessage('⛔️You need to guess a number bro!⛔️');
    // when the correct guess is made
  } else if (guess === secretNumber) {
    displayMessage("Bro,you guessed my number! 🤩You're an absolute chad!🤩");
    document.querySelector('.number').textContent = secretNumber;
    score += 10;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // sets the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the wrong guess is made
  } else if (guess !== secretNumber) {
    // lowers the sore when answere is wrong
    if (score > 0) {
      displayMessage(
        guess > secretNumber ? 'Too High Bro!😦' : 'Too Low Bro!☹️'
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(
        `👎Bro you suck, Game Over! My number was ${secretNumber}`
      );
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Reset the game and score with new number
again.addEventListener('click', () => {
  score = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing bro...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
