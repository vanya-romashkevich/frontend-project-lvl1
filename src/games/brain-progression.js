import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (firstItem, step, Length) => {
  const array = [];
  for (let i = 0; i < Length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const progressionGame = () => {
  const first = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const length = randomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => gameRounds(description, progressionGame);

export default startGame;
