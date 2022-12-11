// 2) Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que
// é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem 
// com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const fs = require('fs').promises;

async function getSimpsons(id){
    const person = await fs.readFile('./simpsons.json'); // função que le o arquivo JSON
    const simpsons = JSON.parse(person); // faz a conversão em JSON

    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id); // essa funcao busca pelo ID do personagem
    if(!chosenSimpson){
        throw new Error('id nao encontrado');
    }
    return chosenSimpson;
}

async function main() {
    const simpsons = await getSimpsons(5);
    console.log(simpsons);
}
main();



// 1) Crie a função, realizar a leitura do arquivo e a conversão do JSON em objeto.
// 2) Busque pelo Simpson desejado e caso não encontre, dispare um erro.
// 3) Caso a personagem exista, resolva a promise com suas informações
// 4) para finalizar precisamos chamar a função na main()