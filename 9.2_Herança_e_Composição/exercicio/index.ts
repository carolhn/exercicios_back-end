import Person from './Person';

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
const julio = new Person('an', new Date('01/01/2019'));
const julia = new Person('julia', new Date('01/01/1900'));

console.log(maria);
console.log(luiza);
console.log(julio);
console.log(julia);

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

//rodar no terminal se da rodando corretamente
// npx ts-node index.ts

//para testar se existe erros(validações) vamos criar nova constante linha 5
