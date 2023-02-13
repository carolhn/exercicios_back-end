// interfaces === contrato

class Animals {
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
 // sempre vai ter atributo publico
 interface Felinos {
    roronar(): void;
 }

 // quando eu tenho algo ESPECIFICO eu crio nova class
 class Cats extends Animal implements Felinos {
     roronar(): void {
         console.log('amassando paozinho*');
     }
 }