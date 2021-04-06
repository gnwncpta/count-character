// ES6
const chalk = require('chalk');
const prompt = require('prompt');
const log = console.log;
prompt.start();

log(chalk.bgGreen.white.bold(" Masukkan Huruf! "))
prompt.get(['letters'], (err, result) => {
    if(err) {return onErr(err)};
    inputInfo(result.letters, totalWords);
})  

const inputInfo = (letters, totalWords) => {
    head = `
    ${chalk.green("======================================")}
    ${chalk.yellow(`Huruf yang diinput :  ${letters}`)}
    ${chalk.green("======================================")}
    `;
    log(head);
    totalWords(letters)
}

const totalWords = (letters) => {
    arrLetters = letters.split('');
    bigLetters = arrLetters.filter(letter => letter == letter.toUpperCase());
    smallLetters = arrLetters.filter(letter => letter == letter.toLowerCase());

    let alreadySeen = [];

    bigLetters.forEach( (letter, index) => {
        let value = letter;
        if(alreadySeen.indexOf(value) !== -1){
            return true;
        }
        alreadySeen.push(value)
    })
}