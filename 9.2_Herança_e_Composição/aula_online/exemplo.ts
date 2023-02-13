class Animal {
   private name: string;
   private age: number;
   private color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    respirar(): void {
        console.log('estou respirando');
    }

    comer(): void {
        console.log('quero comida');
    }
}

// quando eu tenho algo ESPECIFICO eu crio nova class
class Cat extends Animal {
    roronar(): void {
        console.log('amassando paozinho*');
    }
}

class Dog extends Animal {

}

// recebe caracteristica pessoal do gato.
const guel = new Cat('guel', 3, 'siames');
guel.respirar();
guel.roronar();

const guarana = new Dog('guarana', 1, 'caramelo')
guarana.comer();