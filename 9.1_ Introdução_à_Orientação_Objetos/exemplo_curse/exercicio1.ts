class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  // Método turnON
  turnOn():void {
    console.log(
        `A marca${this.brand}, com tamanho${this.size}, resolução ${this.resolution}, e conexões${this.connections}`
    );
  }
}
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

const tv1 = new TV('LG', 32, '4k', ['HDMI', 'WIFI']);
tv1.turnOn();