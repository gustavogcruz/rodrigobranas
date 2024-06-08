/* Promises.all */

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid Input");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}
console.time("performance");
Promise.all([
    sum(2,2),
    sum(4,4)
]).then(function (values) {
    const [a,b] = values;
    return sum(a,b).then(function(result) {
        console.log(result);
        console.timeEnd("performance");
    });
}).catch(function (e) {
    console.log(e);
});