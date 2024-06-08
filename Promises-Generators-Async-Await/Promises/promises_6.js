/* Promises.all */

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid Input");
        setTimeout(function () {
            resolve(a + b);
        }, Math.random() * 1000);
    });
}
console.time("performance");
Promise.race([
    sum(2,2),
    sum(4,4)
]).then(function (value) {
    console.log(value);
    //const [a,b] = value;
    return sum(value,value).then(function(result) {
        console.log(result);
        console.timeEnd("performance");
    });
}).catch(function (e) {
    console.log(e);
});