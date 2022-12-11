// 6) Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const fs = require('fs').promises;

async function simpsons() {
    const data = await fs.readFile('./simpsonFamily.json');
    const alteracao = JSON.parse(data);

    // filtrar o array para remover o personagem nelson
    const removeNelson = alteracao.filter((element) => element.id !== '8');

    // criamos um novo array contendo a personagem maggie
    // const addMaggie = removeNelson.concat([{ id:'15', name:'Maggie Simpson' }]); -- essa tambem seria opção

    const personMaggie = ([{ id:'16', name:'Maggie' }])
    const addMaggie = [...removeNelson, personMaggie];

    // escreva o novo array no arquivo e retrornamos a promisse de escrita
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(addMaggie));
}

function main() {
    simpsons();
}
main();

// 1) Crie uma função que substitua o arquivo simpsonFamily.json e faça o parse do JSON.
// 2) Em seguida, filtre pelo id de Nelson Muntz e remova do array;
// 3) Adicione Maggie Simpson ao array filtrado anteriormente, no qual Nelson Muntz não está mais e salve a alteração no arquivo.