/* async/await - é possível iterar utilizando async/await? */

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
        const functions = [
            sum(2,2),
            sum(4,4)
        ];
        const results = [];
        // functions.forEach(async function(fn) { //evite forEach
        //     const result = await fn;
        //     console.log(result);
        //     results.push(result);
        //});

        // for( let fn of functions) { // for of
        //     const result = await fn;
        //     results.push(result);
        // }
        
        for await(let result of functions) { // for-await-of - iterar sobre um iterator promises
            results.push(result);
        }
        const [a,b] = results;
        const result = await sum(a, b);
        console.log(result);
    } catch(e) { //catch
        console.log(e);
    }
})();