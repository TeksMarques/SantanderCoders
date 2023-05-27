// laço númerico é um laço que vai de um número até outro número: For
const input = require('readline-sync');
// o problema
// const nota1 = Number(input.question('Digite a primeira nota: '));
// const nota2 = Number(input.question('Digite a segunda nota: '));
// const nota3 = Number(input.question('Digite a terceira nota: '));

// let media = (nota1 + nota2 + nota3) / 3;

// acumulador

// let acumulador = 0;

// acumulador = acumulador + 2;
// acumulador =+ 10;
// acumulador ++;

// console.log(acumulador);

// estrutura for 

// for (let i = 0; i < 4; i++) {
//     console.log("Repetição", i)
// }

// for (let i = 12; i < 8; i--) {
//     console.log("Repetição", i)
// }

// resolvendo problema inicial

let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Digite a nota ${i} do aluno: `));
    soma =+ nota;
}

console.log(`A média do aluno é ${soma / 3}`);