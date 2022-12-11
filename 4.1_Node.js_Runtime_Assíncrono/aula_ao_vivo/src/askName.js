const readline = require('readline-sync');

const askName = () => readline.question('Qual nome vc quer pesquisar?');

module.exports = askName;