// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos
// representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes
// dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Alunos {
  private _matricula: number;
  private _name: string;
  private _notasProvas: number[];
  private _notaTrabalhos: number[];
}

const alunos = new Alunos() 