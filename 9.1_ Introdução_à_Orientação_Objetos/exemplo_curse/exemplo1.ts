// criando uma CLASS
class Person {
    //Atributos nome: type
    name: string;
    height: number;
    weight: number;
  
    // Métodos
    // metodo Construtor(variaveis: type )
    constructor(n: string, h: number, w: number) {
      console.log(`Creating person ${n}`);
      // this. referencia a objeto que estamos criando
      this.name = n;
      this.height = h;
      this.weight = w;
    }
  //Método
    sleep() {
      console.log(`${this.name}: zzzzzzz`);
    }
  }
  // criando os objetos //new cria um novo objeto
  const p1 = new Person('Maria', 171, 58);
  const p2 = new Person('João', 175, 66);

  // acesso aos atributos
  console.log(p1.name, p1.height, p1.weight);
  console.log(p2.name, p2.height, p2.weight);

  // acesso aos metodos// todos da classe possui o metodo sleep
  p1.sleep();
  p2.sleep();
  
  /*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 66
  Maria: zzzzzzz
  João: zzzzzzz
  */