// 3) Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

async function simpsons3(){
    const data = await fs.readFile('simpsons.json'); // leitura do arquivo
    const conversao = JSON.parse(data); // conversao do arquivo para json

    const alteracao = conversao.filter((delet) => delet.id !== '10' && delet.id !== '6'); // filtro para remover por id

    await fs.writeFile('simpsons.json', JSON.stringify(alteracao)) // Escreva no arquivo o novo array filtrado.
    console.log(alteracao);
}

function main() {
    simpsons3();
}
main();

// 1) criar uma função que faça a leitura do arquivo e o parse do JSON
// 2) criar um filtro para o array para remover as personagens que desejar
// 3) escreva no arquivo o novo array filtrado

