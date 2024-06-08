const max = 1000;
this.generate = function() { // segunda forma de exportar o módulo - exports || module.exports || this 
    return Math.random() * max;
}
