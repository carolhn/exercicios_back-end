function calculaDivisao(num1, num2) {
    if (num2 === 0) throw new Error('Não pode ser feito uma divisao por zero');

    const resultado = num1 / num2;

    return resultado;
}

// fazendo o tratamento do erro caso um dos divisor for ZERO
try{
const resultado = calculaDivisao(10, 4);
console.log("resultado:", resultado);
} catch (e) {
    console.log("erro:", e.message);
}

// Exemplo 1: Tratando erros de forma síncrona.