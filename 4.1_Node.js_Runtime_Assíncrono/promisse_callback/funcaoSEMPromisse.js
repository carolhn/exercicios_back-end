function calcularDvidisao(num1, num2) {
    if(num2 === 0) throw new Error('Nao pode ser feito uma divisão por zero');

    const resultado = num1 / num2;

    return resultado;
}

try {
const result = calcularDvidisao(2,1);
console.log('resultado: %s', result);
} catch(e) {
    console.log('erro:', e.message);
}


// Exemplo 1: Tratando erros de forma síncrona.