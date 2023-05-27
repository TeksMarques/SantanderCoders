// Laços de repetição

const input = require('readline-sync');

const numeroSorteado = 5;

let numero = Number(input.question('Digite um numero: '));

while (numero !== numeroSorteado) {
    console.log('Você errou o número, Tente novamente');
    numero = Number(input.question('Digite um numero: '));
}

console.log('Você acertou o número!');

// testar quando estiver usando o linux, agora dia 27/05/23 o node crashou no windows