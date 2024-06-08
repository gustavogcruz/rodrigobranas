//match - retorna partes da String com base na RegExp passada por parâmetro
//search - retorna a primeira posição encontrada com base na RegExp passada por parâmetro
/*replace - retorna uma nova String resultante da substituição da String ou RegExp passada no
primeiro parâmetro pelo segundo parâmetro*/

"C++".match(/\+/g);

"Java".match(/a/g);
"Java".search(/a/);

"JavaScript".replace("Java", "Ecma");
"JavaScript".replace(/a/g, 4);