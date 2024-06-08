/* Promises - objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento
de uma forma fácil e direta. */

function sum (a,b, callback) {
    setTimeout( function () {
        callback (a + b);
    }, 1000);
}

const result = sum(2, 2, function(a){
    sum(4,4, function(b){
        sum(a, b, function(result){
            console.log(result); 
        });
    });
});