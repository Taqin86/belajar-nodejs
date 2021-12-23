const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('Taqin@gmail.com'));
// console.log(validator.isMobilePhone('0858123456', 'id-ID'));
// console.log(validator.isNumeric('0858123456'));

// console.log(chalk.italic.bgRed.white('Hello WOrld'));
const nama = 'Taqin';
const pesan = chalk`Hay, saya ${nama} sedang belajar {bgRed nodejs} lo, {bgRed.bold.italic yuk belajar bareng!}`;
console.log(pesan);