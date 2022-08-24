console.log('Welcome to the Brain Games!');


import readlineSync from 'readline-sync';

//запрос имени
const nameUser = readlineSync.question('May I have your name? ');

//приветствие
const greeting = console.log(`Hello, ${nameUser}!`);

export default greeting 
