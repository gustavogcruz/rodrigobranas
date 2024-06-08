/* Função primeira classe - podem ser atribuidas a uma variavel, retornadas de uma função ou passadas
 por parâmetro*/

//Function Declaration - carregada antes do código ser interpretado (hosting)
function soma (a,b) {
    return a + b;
}
console.log(soma(1,1));

//Function Expression
const subtracao = function (a, b) {
    return a - b;
}
console.log(subtracao(1,2));

//Named Function Expression
const soma = function soma(a, b) {
    return a + b;
}
console.log(soma(1,3));

var produto = 
{nome:'sapato', 
preco:150
};

var formulaImpostoA = function (preco) {return preco * 0.1};
var formulaImpostoB = function (preco) {return preco * 0.2};

var calculaPreco = function(produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco)
}

console.log(calculaPreco(produto, formulaImpostoA));
console.log(calculaPreco(produto, formulaImpostoB));

var helloWord = function() {
    return function() {
        return 'Hello World!'
    }
}
console.log(helloWord);
console.log(helloWord());
console.log(helloWord()());

var getIdade = function(extra) {
    console.log(arguments);
    return this.idade + extra;
}

var pessoa = {
    nome: 'Theo',
    idade: 4,
    getIdade: getIdade
};

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2,1,3));
console.log(getIdade.apply(pessoa, [2,1,3]));

var pessoa1 = {
    nome: 'Ana',
    idade: 1
};

var pessoa2 = {
    nome: 'Luciana',
    idade: 41
};

//Funções construtoras X Funções Fãbricas

//Função Fábrica (Factory)

var criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa("Ana", 1));
console.log(criarPessoa("Luciana", 41));


//Função Construtora

var Pessoa = function(nome, idade) {

        this.nome = nome;
        this.idade = idade;

};

console.log(new Pessoa('Theo', 4));

var Ana = {};
Pessoa.call(Ana, "Ana", 1);
console.log(Ana);

var Luciana = {};
Pessoa.call(Luciana, "Luciana", 1);
console.log(Luciana);

//Closures - fechamento

var helloWorld = function() {
    var message = 'Hello World!';
    return function() {
        return message;
    }   
};

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());






