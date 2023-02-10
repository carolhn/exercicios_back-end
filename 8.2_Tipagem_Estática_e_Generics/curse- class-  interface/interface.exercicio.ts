// 1 - criar uma interface que represente automoveis
interface Automobile {
    name: string;
    brand: string;
    color: string;
    doors: number;
    gears: number;
    turnOn: () => void;
    turnOff: () => void;
    speedUp: () => void;
    speedDown: () => void;
    break: () => void;
  }

// 2 - Crie uma interface cujo objeto represente um Felino.
interface Feline {
    name: string;
    subfamilies: string;
    walk: () => void;
    hunt: () => void;
    eat: () => void;
    sleep: () => void;
  }

// 3- Crie uma interface cujo objeto represente uma Aeronave
interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}