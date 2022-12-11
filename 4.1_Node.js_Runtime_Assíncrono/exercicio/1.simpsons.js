// 1° A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises; // importar o fs

async function readPersons() {
    const data = await fs.readFile('simpsons.json'); // leitura do arquivo (readFile)
    const conversaoArq = JSON.parse(data) // converter o biffe em json
    
    const strings = conversaoArq.map(({ id, name }) => `${id} - ${name}`) // criar um array com a informação id -name
    strings.forEach(element =>  console.log(element)); // mostrar na tela 
}

async function main() {
    await readPersons();
}
main();

// 1° importar o fs/promises e a leitura do arquivo (readFile)
// 2° centralizar as informações na função main()
// 3° Converta o conteúdo do arquivo de JSON para um array utilizando JSON.parse.
// 4° Exiba as strings na tela

