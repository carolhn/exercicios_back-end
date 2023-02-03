// calculo da area do quadrado
export function getSquareArea(side: number): number {
    return side ** 2;
  }

  // calculo da area de um retangulo
  export function getRectangleArea(base: number, height: number): number {
    return base * height;
  }

// area de um trignulo
export function getTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
  }

// calcular o perímetro de um polígono.
  export function getPolygonPerimeter(sides: number[]): number {
    return sides.reduce((acc, side) => acc + side, 0);
  }

  // será responsável por verificar se um triângulo é válido com base na medida de seus lados e deve
  //retornar um valor booleano (true ou false
  export function triangleCheck(
    sideA: number,
    sideB: number,
    sideC: number
  ): boolean {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
  }