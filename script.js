'string';

/* eslint-env browser */

const check = document.querySelector('.check');
let score = 20;
document.querySelector('.score').textContent = score;
// const again = document.querySelector('.again');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      "Bro,you guessed my number! You're an absolute chad!";

    score += score;

    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High Bro!';

      score -= 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Bro You suck, Game Over!!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low Broski!';

      score -= 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Bro You suck, Game Over!!';
    }
  }
});


