import getRandomNumber from '../additionalСontent/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression? ';

const calculate = (num1, operator, num2) => {
  let rightAnswer = 0;
  switch (operator) {
    case '*':
      rightAnswer = num1 * num2;
      break;
    case '+':
      rightAnswer = num1 + num2;
      break;
    case '-':
      rightAnswer = num1 - num2;
      break;
    default:
      rightAnswer = num1 - num2;
  }
  return rightAnswer;
};

const getRoundData = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = operations[getRandomNumber(0, (operations.length - 1))];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(calculate(num1, operator, num2));
  return [question, rightAnswer];
};

const startGame = () => gameRounds(description, getRoundData);

export default startGame;
