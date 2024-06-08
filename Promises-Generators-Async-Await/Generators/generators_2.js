/* Os generators utilizam o método next para iterar sobre os valores disponíveis duranta a
execução da função. */

/* Ao encontrar um yield, a execução da função é pausada até o método next ser invocado
novamente. */

function* forever() { //croação generator
    let value = 1;
    while(true) {
        console.log(value++);
        yield; // no momento que chegar no yield, vai ser dado lugar no event loop para Date
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
foreverGenerator.next();
today();
foreverGenerator.next();
foreverGenerator.next();