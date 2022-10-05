import readlineSync from 'readline-sync';

const nameUser = () => {
  const name = readlineSync.question('May I have your name? \n');
  return name;
};

export default nameUser;
