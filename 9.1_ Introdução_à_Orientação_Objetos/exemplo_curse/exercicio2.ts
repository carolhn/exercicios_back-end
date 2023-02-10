class TVs {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;
  
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
      }
  
    // Método turnON
    turnOn():void {
        console.log(
          `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
    available connections: ${this._connections}`,
        );
      }

    get connectedTo(): string | undefined {
        return this._connectedTo;
      }

    set connectedTo(value: string | undefined) {
        // permite setar undefined ou uma conexão que esteja no `connections`
        if (!value || this._connections.includes(value)) {
          this._connectedTo = value;
          console.log(this._connectedTo);
        } else {
          console.log('Sorry, connection unavailable!');
        }
      }
    }
    
  // Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
  
  const tv2 = new TVs ('LG', 32, '4k', ['HDMI', 'WIFI']);
  tv2.turnOn();

  tv2.connectedTo = 'Wi-Fi';
  console.log('Connected to: ', tv2.connectedTo);

  // 1° os atributos precisam estar nomeados com os metodos.(privado, publico)
  // 2° - 