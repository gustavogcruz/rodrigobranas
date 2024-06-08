/* Iteration Methods - quando invocados iterem sobre os elementos do array. */

/*
forEach - executa a função passadas por parâmetro para cada elemento
filter - retorna um novo array contendo somente os elementos que retornaram como true na função
passada por parâmtro
find - retorna o primeiro elemento que retornou true na função passada por parâmetro
some - retorna true se um ou mais elementos retornaram true na função passada por parâmetro
every - retorna true se todos os elementos retornaram true na função passada por parâmetro
map - retorna um novo array com base no retorno da função passada por parâmetro
reduce - retorna um valor com base no retorno da função passada por parâmetro
*/

 const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
 //frameworks.forEach(framework => console.log(framework));

 frameworks.forEach(function(framework) {
        console.log(framework);
 })