//(ponto) - um caracter qualquer
// \ - escape
// ^ = inicio de linha
// $ - fim de linha

/* Grupo de caracteres */

//[abc] - aceita qualquer caractere dentro do grupo, nesse caso a, b, c
//[^abc] - não aceita qualquer caractere dentro do grupo, nesse caso a, b, c
//[0-9] - aceita qualquer caractere entre 0 e 9
//[^0-9] - não aceita qualquer caractere entre 0 e 9

/* Quantificadores */

//{n} - quantifica um número especifico
//{n,} - quantifica um número mínimo
//{n, m} - quantifica um número mínimo e um número máximo
// ? - Zero ou um
// * - Zero ou mais
// + - Um ou mais

/* Metacaracteres */

// \w - representa o conjunto [a-zA-Z0-9]
// \W - representa o conjunto [^a-zA-Z0-9]
// \d - representa o conjunto [0-9]
// \D - representa o conjunto [^0-9]]
// \s - representa um espaço em branco
// \S - representa um NÃO espaço em branco
// \n - representa um quebra de linha
// \t - representa um tab

// () - determina um grupo de captura para realizar extreção de valores de uma determinada String

let regExp = /^(\w+)@(\w+)((\.\w{2,3})+)$/;
//let result = regExp.test("theo@gmail.com"); // retorna boolean
//let result = regExp.exec("theo@gmail.com"); // retorna um array com mais detalhes
let result = regExp.exec("ana@hotmail.com.br");
console.log(result[0]); // regexp 0
console.log(result[1]); // regexp 1
console.log(result[2]); // regexp 2
console.log(result[3]); // regexp 3
console.log(result.index);
console.log(result.input);   