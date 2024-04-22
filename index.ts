#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagenta.bold("\n\tWelcome to 'Muzamil' Word-Counter-Project\n"));

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bgCyan("Enter your sentence to count the word:")
    }
]);

const words = answers.sentence.trim().split(" ");

console.log(chalk.bgBlack(words))

console.log(chalk.green(`Your sentence word count is ${words.length}`));