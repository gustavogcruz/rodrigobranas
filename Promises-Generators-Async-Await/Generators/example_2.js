/* Async - Await de forma similar com generators*/

// function sum (a,b) {
//     setTimeout(function () {
//         return a + b;
//     },1000);
// }

// const result = sum(2,2);
// console.log(result);


// retorno callback

// function sum (a,b, callback) {
//     setTimeout(function () {
//         callback(a + b);
//     },1000);
// }

// sum(2,2, function(result) {
//     console.log(result);
// });

// Promise 1

// function sum (a, b) {
//     return new Promise( function (resolve) {
//         setTimeout(function () {
//             resolve(a + b);
//         },1000);
//     });
// }

// sum(2,2).then(function(result) {
//     console.log(result);
// });

// Promise 2

// function sum (a, b) {
//         return new Promise( function (resolve) {
//             setTimeout(function () {
//                 resolve(a + b);
//             },1000);
//         });
//     }
    
//     sum(2,2).then(function(a) {
//        sum(4,4).then(function(b) {
//         sum(a,b).then(function(result) {
//             console.log(result);
//         })
//        });
//     });


// 

function sum (a, b) {
        return new Promise( function (resolve) {
            setTimeout(function () {
                resolve(a + b);
            },1000);
        });
    }
    
function async(fn) {
    const gen = fn();        
    asyncR(gen);
}

function asyncR(gen, result) {
    const obj = gen.next(result);
    if(obj.done) return;
    obj.value.then(function (result ) {
        asyncR(gen, result);
    })
}

async(function* () {
    const a = yield sum(2,2);
    const b = yield sum(4,4);
    const result = yield sum(a,b);
    console.log(result);
});