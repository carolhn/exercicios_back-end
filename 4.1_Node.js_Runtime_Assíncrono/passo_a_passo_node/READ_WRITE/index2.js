const readline = require('readline-sync');

// essa função escreve manualmente as informações na API JSON
const { writeJson } = require('./readJson');
async function main(){
    writeJson({
        "id": 100,
        "name": "Tryber",
        "year": "2019",
        "country": "Brasil"
    })
}
main()

// estamos criando dentro da função main uma forma de escrever informações no nosso arquivo JSON pelo terminal
async function main () {
    const name = readline.question('qual é o seu nome?')
    const year = readline.questionInt('Qual é o ano?')
    const country = readline.question('qual o pais?')
    
    const newDados = { name, year, country }
    writeJson(newDados)
}
main()
// para resolver a situação do ID precisamos ir na nossa função writeJson
// const novo = JSON.stringify([...oldRead, {id: Date.new(),...newDate}])