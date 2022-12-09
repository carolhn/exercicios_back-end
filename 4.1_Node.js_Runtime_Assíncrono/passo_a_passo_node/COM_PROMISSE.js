function calculaDivisao(num1, num2) {
    const promisse = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisao por zero'));
    const resultado = num1 / num2;
    resolve(resultado);
    })
return promisse;
}

// fazendo o tratamento do erro caso um dos divisor for ZERO

calculaDivisao(2, 8)
.then((result) => console.log(result))
.catch(error=> console.log("Error:", error.message))

// com a promisse vamos utilizar o resolve = sucesso/ reject = falha


// Exemplo 2: Tratando erros de forma assíncrona.