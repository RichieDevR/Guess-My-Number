'use strict';
'string';

const secretNumber = (min, max) => {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const check = document.querySelector('.check');
const again = document.querySelector('.again');
const secretNum = secretNumber(1, 20);
console.log(secretNum);
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  if (guess === secretNum) {
    document.querySelector('.message').textContent =
      "Damn you're good! That's my number!!!";

    document.querySelector('.number').textContent = secretNum;
    Number((document.querySelector('.score').value += 10));
  }
});

again.addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
