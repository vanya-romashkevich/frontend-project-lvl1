import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => randomNumber % 2 === 0;

const evenGame = () => {
  const randomNubmer1 = randomNumber(1, 20);
  const correctAnswer = isEven(randomNubmer1) ? 'yes' : 'no';
  return [randomNubmer1, correctAnswer];
};
const startGame = () => gameRounds(description, evenGame);
export default startGame;
