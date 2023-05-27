// OBJETOS

// como criar um objeto em JavaScript?

let pessoa = {
    nome: "Teresa",
    idade: 28,    
}

console.log(pessoa);

// como acessar as propriedades de um objeto?

console.log(pessoa.nome);
console.log(pessoa["nome"]);

// como adicionar um par de chave e valor em um objeto?

pessoa.altura = 1.58;
console.log(pessoa);

// como remover um par de chave e valor em um objeto?

delete pessoa.altura;
console.log(pessoa);

// como percorrer?

for (let chave in pessoa) {
    console.log(chave);
}