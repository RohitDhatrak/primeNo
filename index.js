const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.red("Check if your birthday is a prime number\n"));
let name = readlineSync.question(chalk.yellow("Enter your name: "));
let d = readlineSync.question(chalk.yellow("Enter your birthdate and month (eg: DD/MM): "))
let date = [];

while(!verifyInput()){
  console.log(chalk.red("\nInvalid Input")); 
  d = readlineSync.question(chalk.yellow("Enter your birthdate and month (DD/MM): "))
  
}

function verifyInput(){
  date = d.split("/");
  date[0] = parseInt(date[0]);
  date[1] = parseInt(date[1]);

  if (
    d.length > 5 ||
    isNaN(date[0]) ||
    isNaN(date[1]) ||
    date[0] == 0 ||
    date[1] == 0 ||
    date[1] > 12 ||
    date[0] > 31
  )
    return 0;

  if(date[1] == 6 || date[1] == 9 || date[1] == 11 || date[1] == 4 && date[0] > 30)
    return 0;

  if (date[1] == 2 && date[0] > 28)
    return 0;

  return 1;
}

function checkPrimeNO() {
  if (date[0] == 2) 
    return chalk.green(name + " your birthday is a prime no!!");
  for (let i = 2; i <= Math.sqrt(date[0]); i++) {
    if (date[0] % i == 0) 
      return chalk.red(name + " your birthday isn't a prime no");
  }
  return chalk.green(name + " your birthday is a prime number!!");
}

console.log("\n" + checkPrimeNO());