// 5)Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

async function simpsons(){
    const data = await fs.readFile('./simpsonFamily.json');
    const alteracao = JSON.parse(data);

    alteracao.push({ id:'8', name: 'Nelson Muntz' }); //Adicione uma nova pessoa ao array de simpsonsFamily.

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(alteracao)); // Escreva o novo conteúdo no arquivo.
}

function main () {
    simpsons();
}
main();

// 1) Crie a função que realiza a leitura do arquivo e o pase do JSON:
// 2) Adicione uma nova pessoa ao array de simpsonsFamily.
// 3)Escreva o novo conteúdo no arquivo.