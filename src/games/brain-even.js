import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNum) => {
  if (randomNum % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  const randomNumber1 = randomNumber(1, 20);
  const correctAnswer = isEven(randomNumber1) ? 'yes' : 'no';
  return [randomNumber1, correctAnswer];
};
const startGame = () => gameRounds(description, evenGame);

export default startGame;
