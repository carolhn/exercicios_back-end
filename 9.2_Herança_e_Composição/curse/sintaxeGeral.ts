// Crie uma classe chamada Superclass.
class SuperClass {
    isSuper: boolean;                       // A Superclass deve possuir um atributo público isSuper
    constructor() { this.isSuper = true}    // isSuper deve ser setado como true na inicialização.

    public sayHello(): void { console.log('Olá mundo!') } // A Superclass deve possuir um método público chamado sayHello
}

// Crie uma classe chamada Subclass que herda da Superclass
class Subclass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
 }

// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.
const myFunc = (object: Subclass) => {
    object.sayHello(); // Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
    console.log(object.isSuper ? 'Super!' : 'Sub!');
}

// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new SuperClass();
const sub = new Subclass();

// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);