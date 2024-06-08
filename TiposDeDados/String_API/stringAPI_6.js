/*slice - retorna uma parta da String que está invocando a função iniciando na posição passada no 
primeiro parâmetro até a posição final passada no segundo parâmetro, ou da posição passada no 
primeiro parâmetro até o fim caso o segundo parâmetro não seja informado*/
/*split - retorna um array contendo o resultado da divisão da String Original de acordo com o critério
passado por parâmetro*/
/*substring - similar ao slice, não aceita valores negativos como parâmetro e permite a inversão 
dos parâmetros*/

"JavaScript".slice(0,4);
"JavaScript".slice(4);

"JavaScript".slice(0,-6); // do final para frente
"JavaScript".slice(-6); // do final para frente

"C;Java;JavaScript;Ruby".split(";");

"JavaScript".substring(0, 4);
"JavaScript".substring(4, 0);
"JavaScript".substring(4);