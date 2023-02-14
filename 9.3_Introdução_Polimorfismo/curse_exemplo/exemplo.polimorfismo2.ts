class Animals {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }

  class Birds extends Animals {
    move() {
      super.move();
      console.log(`${this.name} está voando.`);
    }
  }
  class Mammals extends Animals {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const j = new Animals('Tubarão');
  const k = new Birds('Papagaio');
  const l = new Mammals('Tatu');
  
  const myMoves = (animal: Animals) => {
    animal.move();
  }
  myMoves(j);
  myMoves(k);
  myMoves(l);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */

// Uma outra coisa que você pode fazer é, ao sobrescrever um método qualquer, chamar a implementação
// dele na superclasse por meio do super.