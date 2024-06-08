/* Os generators utilizam o método next para iterar sobre os valores disponíveis duranta a
execução da função. */

/* Ao encontrar um yield, a execução da função é pausada até o método next ser invocado
novamente. */

/* O retorno do método next é um objeto contendo value e done, seguindo o protocolo de iteração. */

/* o método return encerra o generator podendo retornar um valor específico. */

/* O método throw lança uma exceção dentro do generator interrompendo o fluxo de execução
caso a exceção não tenha sido tratada adequadamente. */

function* forever() { //croação generator
    let value = 1;
    while(true) {
        /* no momento que chegar no yield, vai ser "dado" lugar no 
        event loop para Date. O yield pode ser usado como return e recebe o value*/
        try {
        //yield value++;
        const reset = yield value ++;
        if (reset) value = 1;
        }catch(e) {
            console.log(e);
        }
    }        
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.throw("error! oh, my god!"));
//console.log(foreverGenerator.return("end"));
console.log(foreverGenerator.next((true)));
console.log(foreverGenerator.next());