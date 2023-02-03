// Crie uma classe Car cujo objeto representará um carro.
// Deve conter uma propriedade do tipo string chamada brand que representa a marca.
// Deve conter uma propriedade do tipo string chamada color que representa a cor.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.

class Car {
    brand: string = 'mustang'
    color: string = ''
    doors: number = 0

    constructor(brand: string, color: string, doors: number) {
        this.brand = this.brand
        this.color = color
        this.doors = doors
    }
    hank() :void {
        console.log('aciona a buzina do carro');
    }
    turnOn() :void {
        console.log('turnOn que liga o carro.');
    }
    turnOff() :void {
        console.log('turnOff que desliga o carr');
    }
    speedUp() :void {
        console.log('speedUp que acelera o carro.');
    }
    speedDown() :void {
        console.log('speedDown que reduz a velocidade do carro.');
    }
    stop() :void {
        console.log('stop que para o carro.');
    }
    turn(param: string) :void {
        console.log('turn que recebe uma direção do tipo string e vira o carro.');
    }
}

const gol = new Car('Gol', 'Prata', 4)
console.log(gol);


