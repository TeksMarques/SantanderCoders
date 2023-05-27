// > Operados booleanos

// Igualdade: == ou ===
// Desigualdade: != ou !==
// Maior que: >
// Menor que: <
// Maior ou igual: >=
// Menor ou igual: <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == "10"); // o uso de == não leva em consideração o tipo da variável, apenas o valor
console.log(numero === "10"); // o uso de === leva em consideração o tipo da variável, é o mais utilizado 
// para evitar bugs futuros

// - Conjunções lógicas

// AND => &&

let idade = 26;
let tenhoCNH = true;

const podeDirigir = idade >= 18 && tenhoCNH === true;
console.log("Posso dirigir?", podeDirigir);

// OR => ||

let idade2 = 40;

const votoFacultativo = idade2 < 18 || idade2 >= 70;

// NOT => !

const estouGostandoDoCurso = false;

console.log("Estou gostando do curso?", !estouGostandoDoCurso);
