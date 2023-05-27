// formas de nomear uma variável

// camelCase é a mais utilizada dentro do JS
let primeiroNumero = 20;
let segundoNumero = 2;

// aula 3 - operadores aritméticos

// adição: +
let soma = primeiroNumero + segundoNumero;
console.log('Soma =', soma);
// subtração: -
console.log('Subtração =', primeiroNumero - segundoNumero);
// multiplicação: *
console.log('Multiplicação =', primeiroNumero * segundoNumero);
// divisão: /
console.log('Divisão =', primeiroNumero / segundoNumero);
// exponenciação: **
console.log('Exponenciação =', primeiroNumero ** segundoNumero);
// resto da divisão: %
console.log('Resto da divisão =', primeiroNumero % 3);

// Precedência de operadores aritméticos
// dentro do JS segue as mesmas regras padrões da matemática, por isso temos
// que usar os parênteses para definir a ordem de precedência

console.log((3 + 2) * 5);
console.log(3 + 2 * 5);

// Biblioteca Math

// a biblioteca Math é uma biblioteca nativa do JS, que possui várias funções
// matemáticas prontas para serem utilizadas
// para acessar uma função da biblioteca Math, basta digitar Math.nomeDaFunção

console.log(Math.PI);
console.log(Math.sqrt(25));

