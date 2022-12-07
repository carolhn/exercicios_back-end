function calcularDvidisao(num1, num2) {
   const promisse = new Promise((resolve, reject) => {
    if(num2 === 0) reject(new Error("nao pode dividir um numero por zero"));
    const resultado = num1 / num2;
    resolve(resultado);
   });

   return promisse;
}

calcularDvidisao(2,1)
.then((result) => console.log(result))
.catch(err => console.log("erro:",err.message))

// Exemplo 2: Tratando erros de forma assíncrona.

// No exemplo 2, note que a função dividirNumeros retorna uma Promise, ou seja, ela promete que 
// vai dividir os números. Caso não consiga realizar a divisão, ela rejeita essa promessa, utilizando
// a função reject. Caso ocorra tudo certo, ela resolve a promessa, utilizando a função resolve.