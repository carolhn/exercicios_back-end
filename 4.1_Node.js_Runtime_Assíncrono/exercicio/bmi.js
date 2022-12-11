const readline = require('readline-sync');

function calculaIMC(peso, altura) {
    console.log(`Peso: ${peso}, Altura ${altura}`);

    const alturaMet = altura / 100;
    const alturaTotal = alturaMet ** 2;
    const imc = peso / alturaTotal;
    return imc;
}

const BMI_MAX_AND_MIN = {
    'Abaixo do peso(Magreza)': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Peso Normal': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Acima do peso(sobrepeso)': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obesidade grau I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obesidade grau II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obesidade grau III': {
      minBMI: 40,
      maxBMI: 100,
    },
  };

  function calculaObesidade(imc) {
    const situacao = Object.keys(BMI_MAX_AND_MIN);

    const resultadoFinal = situacao.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
    const dentroMin = minBMI ? imc > minBMI : true;
    const dentroMax = maxBMI ? imc < maxBMI : true;

    return dentroMax && dentroMin;
    })
    return resultadoFinal;
  }

function main() {
    const peso = readline.questionFloat('Qual seu peso? (ks)')
    const altura = readline.questionInt('Qual sua altura? (cm)')
   
    const imc = calculaIMC(peso, altura);
    const obesidade = calculaObesidade(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Situacao: ${obesidade}`);
}
main();


