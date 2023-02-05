// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput: { name: string, age: number } = {
    name: 'Rui',
    age: 23,
  };
  
  const createSimpleSentence = (param: typeof peopleInput) => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
  }
  
  console.log(createSimpleSentence(peopleInput));