/* closure - é uma função com um scope chain estático que é definida no momento em que a função
é criada, por isso, todas as funções em JS são closures*/

function fn1() {
    return function() {
        const v1 = 10; // momento da criação
        console.log(v1);
    }
}

const fn2 = fn1();
const v1 = 100;
fn2();