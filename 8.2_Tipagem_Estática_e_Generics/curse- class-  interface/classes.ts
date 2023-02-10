//CRIAÇÃO DE CLASSE
class Person {
    name: string;
    birthDate: Date;
    age: number;
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name: string, birthDate: Date, age: number) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

// INSTANCIA:
// A classe Person pode ser reutilizada para criar qualquer quantidade de novos objetos Person,
// cada um com suas próprias características.

    const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
    const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

    console.log(person1);
    person1.speak()

    console.log(person2);
    person2.walk();

//______________________________________________________________________________________________________________

//CRIAÇÃO DE CLASSE/ DISPENSANDO UM OBJETO
// Podemos dizer que uma das propriedades da nossa classe Person não é obrigatória para criarmos um objeto pessoa. 
// Se quiséssemos dizer que a idade não é obrigatória nossa classe ficaria assim:

class PersonA {
    name: string;
    birthDate: Date;
    age?: number;   // ?

    constructor(name: string, birthDate: Date, age?: number) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

// INSTANCIA:
// A criação das nossas instâncias de Person poderiam ou não serem criadas com a idade.
const personC = new PersonA("Jane Doe", new Date("1986-01-01"));
const personB = new PersonA("Jon Doe", new Date("1980-08-05"), 31);

console.log(personC);
person1.speak()
