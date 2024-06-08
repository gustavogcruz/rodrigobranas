//var
//let
//const

/* Declaração - o nome da variação é registrado no contexto de execução, também conhecido
como escopo, da função. */
/* Inicialização - a variável é inicializada como o valor undefined. */
/* Atribuição - um valor é atribuído para a variável. */

/* let - é declarada no escopo da função mas só é inicializada posteriormente, respeitando bloco
e permitindo reatribuição, mas NÃO a redeclaração. */

// let pi = 3.141592;
// console.log(pi);
// pi = 3; //reatribuição
// console.log(pi);
// //let pi = 4; //redeclaração

if (true) {
    let pi = 3.141592;
}
console.log(pi);

