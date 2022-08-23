console.log('Welcome to the Brain Games!');


import readlineSync from 'readline-sync';

//запрос имени
const nameUser = readlineSync.question('May I have your name? ');

//приветствие
const greeting = console.log(`Hello, ${nameUser}!`);

export default greeting 

// ДАЛЕЕ ИДЕТ НОВОЕ НУЖНО ПЕРЕНЕСТИ ПО ЗАДАНИЮ В ДРУГОЙ ФАЙЛ


// условие игры
console.log('Answer "yes" if the number is even, otherwise answer "no".');




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
const evenGame = () => {
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
}


