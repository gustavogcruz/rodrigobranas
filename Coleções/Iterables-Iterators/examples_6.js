// como criar um Iterable

//Funcão contrutora
function createItetator(...array) {
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

const iterator = createItetator("Fortran", "Lisp", "COBOL");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());