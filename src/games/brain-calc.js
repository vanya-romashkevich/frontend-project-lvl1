import randomNumber from '../additional content/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';

const sum = (num1, operator, num2) => {
  let rightAnswer = 0;

  if (operator === '*') {
    rightAnswer = num1 * num2;
  }
  if (operator === '+') {
    rightAnswer = num1 + num2;
  }
  if (operator === '-') {
    rightAnswer = num1 - num2;
  }
  return rightAnswer;
};

export const calc = () => {
  const operations = ['+', '-', '*'];
  const num1 = randomNumber(1, 20);
  const num2 = randomNumber(1, 20);
  const operator = operations[randomNumber(0, (operations.length - 1))];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(sum(num1, operator, num2));
  return [question, rightAnswer];
};

const startGame = () => {
  gameRounds(description, calc);
};

export default startGame;
