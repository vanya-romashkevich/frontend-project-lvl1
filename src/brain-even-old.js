import readlineSync from 'readline-sync';

// условие игры
const evenGame = () => {
        const text = 'Answer "yes" if the number is even, otherwise answer "no".';


// функция случайного числа 
const randomNumber = Math.floor(Math.random() * 100);

// вызов рандомного числа
const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`);

// ответы
const positiveAnswer = 'yes';
const negativeAnswer = 'no';

const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
const errorMessage = (`${userAnswer} is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${nameUser}!`);

// игра
const gameData = () => {
    for (let i = 0; i < 3; i += 1) {
        if (randomNumber % 2 === 0 && userAnswer === positiveAnswer) {
    console.log('Correct!');
            } else if (randomNumber % 2 !== 0 && userAnswer === negativeAnswer) {
    console.log('Correct!');
            } else if (randomNumber % 2 === 0 && userAnswer === negativeAnswer) {
    return errorMessage;
            } else if (randomNumber % 2 !== 0 && userAnswer === positiveAnswer) {
    return errorMessage;
            } else {
    return errorMessage;
        }
    }
    console.log(`Congratulations, ${userName}!`);
};


}

export default evenGame
