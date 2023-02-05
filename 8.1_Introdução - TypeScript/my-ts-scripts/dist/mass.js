"use strict";
const unit = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function converts(value, fromUnit, toUnit) {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
