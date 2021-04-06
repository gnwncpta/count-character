// ES6
const chalk = require('chalk');
const prompt = require('prompt');
const log = console.log;
prompt.start();

log(chalk.bgGreen.white.bold("[@] MASUKKAN HURUF! "))
prompt.get(['letters'], (err, result) => {
    if(err) {return onErr(err)};
    inputInfo(result.letters, totalWords);
});

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

    const number = {};

    arrLetters.forEach( letter => {
        number[letter] = (number[letter]) ? number[letter] + 1 : 1;
    });

    const letter = {};

    arrLetters.forEach( isi => {
        letter[isi] = (letter[isi]) ? letter[isi] = isi : isi;
    })

    for(let keyletter in letter){
        console.log(chalk.green(`Huruf ${keyletter} ada ${number[keyletter]} karakter.`));
    }
}

