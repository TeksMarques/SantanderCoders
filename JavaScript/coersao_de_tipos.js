// > Coersão de Tipos

// Coersão de tipos é a conversão automática de valores de um tipo de dado para outro tipo de dado

// Exemplos de coersão de tipos:

// 1. Coersão Explícita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroString = String(numero);
console.log(numeroString, typeof numeroString);

console.log(Number("123456"));
console.log(parseFloat("123.456"));
console.log(parseInt("123.456"));
console.log(Boolean(0)); // para o numero 0 retorna false, para qualquer outro número retorna true
console.log(Boolean(-1)); // para qualquer número diferente de 0 retorna true

// 2. Coersão Implícita (Automática)

console.log(10 + '1'); // o JS converte o número 10 para string e concatena com a string '1' quando se usa +
console.log('10' - 1); // o JS converte a string '10' para número e subtrai 1
console.log(10 * '3'); // o JS converte a string '3' para número e multiplica por 10

// Outros exemplos

let n = 1 + '1'; // n = '11'

n = n - 1; // n = '11' - 1 = 10

console.log(n); 

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); // 95

// Qual será a saída desse código?
console.log('2' + 3 + 4 + 5); // 2345

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); // 15

