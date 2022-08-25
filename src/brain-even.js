import readlineSync from 'readline-sync';
import nameUser from '../src/cli.js';

// 

const evenGame = () => {

    console.log('Welcome to the Brain Games!');

    const username = nameUser();
    
    console.log(`Hello, ${username}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

    const gameData = () => {

        // вызов случайного числа
        const randomNumber = Math.floor(Math.random() * 100);

        // задание со случайным числом юзеру
        const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`);

        // ответы 
        const positiveAnswer = 'yes';
        const negativeAnswer = 'no';

        // ответ с тернарником для замены в ответе
        const opposite = (userAnswer === 'yes' ? 'no' : 'yes');
        const errorMessage = (`${userAnswer} is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${username}!`);


        //игра 
        const game = () => {
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
            return console.log(`Congratulations, ${username}!`);
        };
    };

    gameData()
    
}


export default evenGame