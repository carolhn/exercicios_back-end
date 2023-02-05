"use strict";
const unidades = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function converta(value, fromUnit, toUnit) {
    const fromIndex = unidades.indexOf(fromUnit);
    const toIndex = unidades.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
