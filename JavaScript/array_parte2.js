// Arrays - parte 2 - métodos de arrays

const arr1 =[30, 12, 45, 34, 29];
let arr2 = [10];

// fatiamento: slice()

console.log(arr1.slice(0, 2)); // ele não inclui o último elemento, retorna o q está entre os índices 0 e 2
console.log(arr1.slice(2)); // retorna o q está entre o índice 2 e o último elemento

// adicionando elementos: push(), unshift()

console.log("Antes de adicionar:", arr2);
arr2.push(15, 20); // adiciona o elemento sempre no final do array
console.log("Depois de adicionar com push:", arr2);
arr2.unshift(25); // adiciona o elemento sempre no início do array
console.log("Depois de adicionar com unshift:", arr2);

// removendo elementos: pop(), shift()

console.log("Antes de remover com o pop:", arr2);
const elementoRemovido = arr2.pop(); // remove o último elemento do array
console.log("Depois de remover com o pop:", arr2);
console.log("Elemento removido:", elementoRemovido);

console.log("Antes de remover com o shift:", arr2);
const elementoRemovido2 = arr2.shift(); // remove o primeiro elemento do array
console.log("Depois de remover com o shift:", arr2);
console.log("Elemento removido:", elementoRemovido2);

//concatenação: concat()

console.log('arr1:', arr1);
console.log('arr2:', arr2);

console.log(arr1.concat(arr2)); // concatena os dois arrays, mas não altera os arrays originais

//buscar elementos: indexOf(), lastIndexOf()

console.log(arr1);
let indiceDoelemento = arr1.indexOf(34); // retorna o índice do elemento passado como parâmetro
// se o elemento não existir, retorna -1
console.log("Índice do elemento 34:", indiceDoelemento);

let arr3 = [1, 2, 3, 3, 5, 3];
console.log(arr3.lastIndexOf(3)); // retorna o índice do último elemento passado como parâmetro

//descobrindo a existência de elementos: includes()

console.log(arr1);
console.log(arr1.includes(10)); // sempre vai retornar true ou false

//invertendo a ordem dos elementos: reverse()

console.log("arr1 normal:", arr1);
const arr1Invertido = arr1.reverse(); // altera o array original
console.log("arr1 invertido:", arr1Invertido);