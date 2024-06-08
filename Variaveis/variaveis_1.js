//var
//let
//const

/* Declaração - o nome da variação é registrado no contexto de execução, também conhecido
como escopo, da função. */
/* Inicialização - a variável é inicializada como o valor undefined. */
/* Atribuição - um valor é atribuído para a variável. */

/* var - declarada e inicializa no escopo da função, não respeitando bloco e permitindo a
redeclaração e reatribuição.*/
/* let - */

// var pi = 3.141592;
// console.log (pi);
// var pi = 3; // reatribuição - permitido usando var
// console.log(pi);

if (true) {
    var pi = 3.141592;
}
console.log(pi);