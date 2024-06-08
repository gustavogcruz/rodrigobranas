/* return desencadeando a promise, tendo somente um catch */

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid Input");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}
console.time("performance");
const result = sum(2,2).then(function (a) {
    return sum(4,4).then(function (b) {
        return sum(a,b).then(function (result) {
            console.log(result);
            console.timeEnd("performance");
        })
    })
}).catch(function (e) {
    console.log(e);
});