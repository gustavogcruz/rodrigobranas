/* Para criar uma promise basta instanciá-la, executando a função resolve em caso de sucesso
e sendo tratado por meio de then).*/

function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid Input");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}

const result = sum().then(function (a) {
    sum().then(function (b) {
        sum().then(function (result) {
            console.log(result);
        }).catch(function (e) {
            console.log(e);
        });
    }).catch(function (e) {
        console.log(e);
    });
}).catch(function (e) {
    console.log(e);
});