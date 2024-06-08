//variable object - tudo que a função utiliza
//scope chain - cadeia de escopos
//this

// não é possível acessar de fora uma variável que foi declarada dentro de uma função

const v1 = 10; //scope global
const fn1 = function() {
    const v1 = 100; // mais próximo
    const fn2 = function() {
        const v1 = 1000; // mais próximo
        console.log(v1);
        const v2 = 10000; //mais próximo
        console.log(v2);
    }
    fn2();
}

fn1();
console.log(v2); // não é possível acessar de fora um varivável declarada dentro de uma função