// ARRAYS

// - Como criar um array?

let arr = ['Teresa', 28, 1.58, true];
console.log(arr);

// Como acessar elementos de um array?

console.log(arr[0]); // imprimir o primeiro elemento do array através do índice que se inicia do 0
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// Como descobrir o tamanho de um array?

console.log(arr.length);

// Percorrendo arrays

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for (let elemento of arr) { // for of - retorna o valor
    console.log(elemento);
}

for (let index in arr) { // for in - retorna o índice
    console.log(index, arr[index]);
}