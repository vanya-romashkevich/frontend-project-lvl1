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

        // ответы 
        const positiveAnswer = 'yes';
        const negativeAnswer = 'no';

        // ответ с тернарником для замены в ответе
        const opposite = (userAnswer === 'yes' ? 'no' : 'yes' );
        const errorMessage = (`${userAnswer} is wrong answer ;(. Correct answer was '${opposite}'. \nLet's try again, ${username}!`);
        
            if (randomNumber % 2 === 0 && userAnswer === positiveAnswer) {
    console.log('Correct!');
            } else if (randomNumber % 2 !== 0 && userAnswer === negativeAnswer) {
    console.log('Correct!');
            } else if (randomNumber % 2 === 0 && userAnswer === negativeAnswer) {
    return console.log(errorMessage);
            } else if (randomNumber % 2 !== 0 && userAnswer === positiveAnswer) {
    return console.log(errorMessage);
            } else {
    return console.log(errorMessage);;
        }
    }
    return console.log(`Congratulations, ${username}!`);

}


// есть ошибка : если ввести вместо yes или no рандомный набор букв, независимо от числа всегда будет отвечать, что оно четное.
// решение - opposite сделать зависимость от того, каким число является (четным или нечетным), а не от ответа юзера (yes or no)

export default evenGame