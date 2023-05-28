// Laços de repetição

const readlineSync = require('readline-sync');

const numeroSorteado = 5;

let numero = Number(readlineSync.question('Digite um numero: '));

while (numero !== numeroSorteado) {
    console.log('Você errou o número, Tente novamente');
    numero = Number(readlineSync.question('Digite um numero: '));
}

console.log('Você acertou o número!');


// Meu node não havia crashado, mas utilizando apenas o code runner não funcionava, apois pesquisas descobri que para funcionar o readline-sync precisava utilizar o terminal e primeiro chamar o node e logo depois o arquivo que queria executar, no caso o estrutura_de_repeticoes.js //
