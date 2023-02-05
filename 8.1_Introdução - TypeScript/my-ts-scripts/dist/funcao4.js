"use strict";
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
    name: 'Rui',
    age: 23,
};
const createSimpleSentence = (param) => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
};
console.log(createSimpleSentence(peopleInput));
