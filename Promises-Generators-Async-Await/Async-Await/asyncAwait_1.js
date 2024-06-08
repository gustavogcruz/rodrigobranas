/* async/await - facilita a interação com chamadas assícronas, aguardadno o retorno de uma 
determinada promise*/

// function sum (a,b) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(a + b);
//         }, 1000);
//     });
// }

// (async function () {
//     const a = await sum(2,2);
//     const b = await sum(4,4);
//     const result = await sum(a,b);
//     console.log(result);
// })();

function sum (a,b) {
    return new Promise(function(resolve, reject) { // reject
        if(!a || !b) return reject("Invalid Input"); //exceções
            setTimeout(function() {
                resolve(a + b);
            }, 1000);
        });
}

(async function () {
    try { // try
        const a = await sum(2);
        const b = await sum(4,4);
        const result = await sum(a, b);
        console.log(result);
    } catch(e) { //catch
        console.log(e);
    }
})();