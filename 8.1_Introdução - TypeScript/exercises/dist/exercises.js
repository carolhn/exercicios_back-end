"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
// calculo da area do quadrado
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
// calculo da area de um retangulo
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
// area de um trignulo
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
// calcular o perímetro de um polígono.
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
// será responsável por verificar se um triângulo é válido com base na medida de seus lados e deve
//retornar um valor booleano (true ou false
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
