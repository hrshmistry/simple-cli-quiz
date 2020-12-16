var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.bold("May I have your name? "));
console.log("Welcome " + chalk.bold(userName) + "!");
console.log();

var score = 0;

var questionsList = [{
  question: chalk.bold.greenBright("Am i older than 25? "),
  answer: "NO",
}, {
  question: chalk.bold.greenBright("Is my hometown Delhi? "),
  answer: "NO",
},
{
  question: chalk.bold.greenBright("What is my name? "),
  answer: "HARSH",
},
{
  question: chalk.bold.greenBright("What is my age? "),
  answer: "21",
},
{
  question: chalk.bold.greenBright("Which is my favourite Browser? "),
  answer: "BRAVE",
},];

for (var i = 0; i < questionsList.length; i++) {
  question = questionsList[i].question;
  answer = questionsList[i].answer;
  play(question, answer);
}

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer) {
    console.log(chalk.dim("you are right!"));
    score = score + 1;
  } else {
    console.log(chalk.dim("you are wrong!"));
  }
  console.log("current score: " + chalk.keyword('orange').bold(score));
  console.log(chalk.dim("--------------------------"));
}

console.log(chalk.bold("Congrats!🎉  You Scored ") + chalk.keyword('orange').bold(score) + "!");



