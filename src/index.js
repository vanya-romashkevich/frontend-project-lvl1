import readlineSync from 'readline-sync';

const runGame = (description, brainGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  function roundsCount() {
    for (let i = 0; i < 3; i += 1) {
      const [question, rightAnswer] = brainGame();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer !== rightAnswer) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      } console.log('Correct!');
    } console.log(`Congratulations, ${userName}!`);
  }
  return roundsCount();
};

export default runGame;
