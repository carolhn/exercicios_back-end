"use strict";
// Essa função é responsável por validar se o formato do e-mail está correto.
const emailInput = 'email@email.com';
const validateEmailFormat = (param) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
