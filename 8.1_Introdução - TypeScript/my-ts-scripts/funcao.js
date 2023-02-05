var numberInput = 7;
var isItAPrime = function (param) {
    for (var i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
isItAPrime(numberInput)
    ? console.log("".concat(numberInput, " \u00E9 primo"))
    : console.log("".concat(numberInput, " n\u00E3o \u00E9 primo"));

// Any = qualquer tipo
// (number | string) = type union

// compilar = transformar um codigo em outro

// como executar um arquivo/ ele vai gerar um arquivo JS
// npx tsc nome do arquivo.ts