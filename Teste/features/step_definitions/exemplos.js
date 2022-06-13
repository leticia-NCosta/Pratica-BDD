const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')


let primeiroNumero;
let segundoNumero;
let soma;
Given('que tenho dois valores', function () {

});



When('faço a soma do numero {int} e {int}', function (int1, int2) {
    primeiroNumero = int1;
    segundoNumero = int2;

    soma = primeiroNumero + segundoNumero;

});

Then('o resultado será o número {int}', function (int) {

    assert.strictEqual(soma, int)
});

function isItFriday(today) {
    if (today === "Sexta-feira") {
        return "TGIF";
    } else {
        return "nop";
    }
}

Given('Hoje é Domingo', function () {
    this.today = 'Sunday';
});

When('Eu pergunto se é sexta-feira ainda', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('dito {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});



Given('hoje é {string}', function (givenDay) {
    this.today = givenDay;
  });


  Then('Eu deveria ser informado {string}', function (expectedAnswer) {      
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });