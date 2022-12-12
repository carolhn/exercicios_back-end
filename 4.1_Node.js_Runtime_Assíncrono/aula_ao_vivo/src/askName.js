const readline = require('readline-sync');

const askName = () => readline.question('Qual nome vc quer pesquisar?');

module.exports = askName;

// o método question captura o que digitamos no terminal e renderiza
// vamos exportar a funcao que armazena o valor name para utilizarmos no INDEX.JS