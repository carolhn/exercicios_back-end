class Animal {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }
  class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const a = new Animal('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');
  
  const myMove = (animal: Animal) => {
    animal.move();
  }
  myMove(a);
  myMove(b);
  myMove(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */


//sobrecarga de métodos - possue nomes iguais e uma assinatura diferente(quantidade de parametros e tipo)

//sobre escrita - na sub classe reescrevemos o metodo que foi herdado da superclass