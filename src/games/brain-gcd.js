import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const gcdGame = () => {
  const randomNubmer1 = randomNumber(1, 20);
  const randomNubmer2 = randomNumber(1, 20);
  const randomOperation = `${randomNubmer1} ${randomNubmer2}`;

  return [randomOperation, String(gcd(randomNubmer1, randomNubmer2))];
};

const startGame = () => gameRounds(description, gcdGame);

export default startGame;
