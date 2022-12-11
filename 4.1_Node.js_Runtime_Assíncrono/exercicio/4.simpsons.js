//4) Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
const fs = require('fs').promises;

async function createSimpsonsFamily(){
    const data = await fs.readFile('simpsons.json')
    const conversao = JSON.parse(data);

    const familyId = [1, 2, 3, 4];

    const simpsonFamily = conversao
    .filter((person) => familyId
    .includes(Number(person.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string

    console.log(simpsonFamily);

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily)); // Escreva o novo arquivo no disco.

}

function main(){
    createSimpsonsFamily();
}
main();
// 1) criar uma função que converte o arquivo em JSON
// 2) Crie um array com os IDs da família e filtrar apenas com os membros com esses IDs.
// 3) Escreva o novo arquivo no disco.
