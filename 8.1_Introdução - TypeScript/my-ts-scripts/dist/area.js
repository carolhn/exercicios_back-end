"use strict";
const unidade = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert(value, fromUnit, toUnit) {
    const fromIndex = unidade.indexOf(fromUnit);
    const toIndex = unidade.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
