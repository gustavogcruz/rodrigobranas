/*concat - retorna uma nova String resultante da concatenação da que está invocando a função e da outra, 
passada por parâmetro*/
//padStart - Completa a String com caracteres no início
//padEnd - Completa a String com caracteres no fim
//repeat - repete um caractere
//trim - Elimina espaços em branco no início e no fim
//trimLeft - Elimina espaços em branco no início
//trimRight - Elimina espaços em branco no fim

"Java".concat("Script");
"Data".concat("Flex");

"Script".padStart(10, "Java");
"C".padEnd(3, "+");

"C".concat("+".repeat(2));

" Self ".trim();
" Scheme".trimStart(); //trimLeft
"Perl ".trimEnd(); //trimRight
