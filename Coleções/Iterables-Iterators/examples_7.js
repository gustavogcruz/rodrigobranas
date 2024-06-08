// como criar um Iterable

//Funcão contrutora
// function createItetator(...array) {
//     let i = 0;
//     return {
//         next() {
//             if( i < array.length) {
//                 return {
//                     value: array[i++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     };
// }

// const iterator = createItetator("Fortran", "Lisp", "COBOL");

// // for (let language of iterator) {
// //     console.log(language);
// // }

// // console.log([...iterator]);

function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    if( i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            };

        }
    }
}
    
    const iterable = createIterable("Fortran", "Lisp", "COBOL");
    
    for (let language of iterable) {
        console.log(language);
    }
    
    console.log([...iterable]);