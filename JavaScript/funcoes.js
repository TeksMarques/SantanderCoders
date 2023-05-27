// funções

// definindo uma função

function saudacao() {
    console.log("Olá, seja bem-vindo(a)!");
}

// chamando a função

saudacao();

// função com parâmetro

// a função mesmo com um parametro, não é obrigatório passar um valor para ela, ela ira funcionar
// mesmo sem o valor, porém o valor será undefined
// também é possivel deixar o parametro com um valor padrão, caso não seja passado nenhum valor
// para ele, ele irá assumir o valor padrão - exemplo: function saudacaoComParametro(nome = "visitante") {}

function saudacaoComParametro(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

// chamando a função

saudacaoComParametro("Teresa");

// função com retorno

function soma (a, b) {
    return a + b;
}

// no lugar de usar um console.log que só imprime, usamos o return,
// que irá retornar o valor da função e assim utilizar em outros trechos de codigos ou variaveis

const result = soma(2, 3);
console.log(result);

// função com retorno (arrow function)

// arrow function é uma forma mais curta de escrever uma função
// a arrow function é uma função anonima, ou seja, não tem nome

const soma2 = (a, b) => {
    return a + b;
}

// se a função tiver apenas uma linha, podemos escrever de forma mais curta

const soma3 = (a, b) => a + b;

// se a função tiver apenas um parametro, podemos escrever de forma mais curta

const soma4 = a => a + 5;

// se a função não tiver nenhum parametro, podemos escrever de forma mais curta

const soma5 = () => 5 + 5;
