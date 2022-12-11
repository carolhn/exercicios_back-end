const fs = require('fs').promises;

async function readJson() {
    try {
    const data = await fs.readFile('../CAMINHO do arquivo json')
    } catch(error) {
        console.log(`ERRO NA LEITURA DO ARQUIVO ${error}`);
    }
}
readJson();

// 1° para fazer a leitura de um arquivo precisamos importar o fs
// 2° vamos deixar ele assincrono
// 3° vamos fazer o tratamento dos erros

const fs = require('fs').promises;
const { networkInterfaces } = require('os');
const path = require('path');

async function readJson() {
    try {
    const data = await fs.readFile(path.resolve(__dirname, '../CAMINHO do arquivo json'))
    const traducao = JSON.parse(data) // trasformando um arquivo buffe em JSON
    
    return traducao
    } catch(error) {
        console.log(`ERROR NA LEITURA DO ARQUIVO ${error}`);
    }
}

async function writeJson(newDate) {
    try {
        const oldRead = readJson();
        const novo = JSON.stringify([...oldRead, {id: Date.new(),...newDate}])
        await fs.writeFile(path.resolve(__dirname, '../ caminho do arquivo json'), novo)

    } catch(error) {
        console.error(`erro na escrita: ${error}`);
    }
}
readJson();

module.exports = { readJson, writeJson }

//4° importante: o PATH ajuda a achar o caminho dos arquivos
//5° agora vamos centralizar essa informação no index.js para ele poder ler essa nossa função
// vamos exportar nossa função 