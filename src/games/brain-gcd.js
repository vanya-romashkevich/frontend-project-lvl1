import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else b %= a;
  }

  const result = a + b;
  return result;
};

const gcdGame = () => {
  const randomNubmer1 = randomNumber(0, 10);
  const randomNubmer2 = randomNumber(0, 10);
  const randomOperation = `${randomNubmer1} ${randomNubmer2}`;

  return [randomOperation, String(getGCD(randomNubmer1, randomNubmer2))];
};

const startGame = () => gameRounds(gcdGame, description);

export default startGame;
