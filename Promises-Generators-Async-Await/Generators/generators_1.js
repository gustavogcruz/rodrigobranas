/* Generators tornam possível pausar a execução de determinada função, permitindo a utilização do
event loop de forma cooperativa*/

function* forever() { //criação generator *
    let value = 1;
    while(true) {
        console.log(value++);
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(typeof foreverGenerator);
console.log(foreverGenerator);
console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__)); //getPrototypeOf

forever();
today();