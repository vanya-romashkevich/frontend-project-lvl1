import readlineSync from 'readline-sync';
import nameUser from '../src/cli.js';

// 

const evenGame = () => {

    console.log('Welcome to the Brain Games!');

    const username = nameUser();
    
    console.log(`Hello, ${username}!\nAnswer "yes" if the number is even, otherwise answer "no".`);




    for (let i = 0; i < 3; i += 1) {

        const randomNumber = Math.floor(Math.random() * 100);

        // задание со случайным числом юзеру
        const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`);

        // ответ с тернарником для замены в ответе
        const opposite = (userAnswer === 'yes' ? 'no' : 'yes' );
        const errorMessage = (`${userAnswer} is wrong answer ;(. Correct answer was '${opposite}'. \nLet's try again, ${username}!`);


        const isEven = (randomNumber) => randomNumber % 2 === 0

        const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no' 
            if (expectedAnswer === userAnswer) {
                console.log('Correct');
            } else if (expectedAnswer !== userAnswer) {
                return console.log(errorMessage);
            } else {
                return console.log(errorMessage);
            }
    }
    return console.log(`Congratulations, ${username}!`);

};

export default evenGame