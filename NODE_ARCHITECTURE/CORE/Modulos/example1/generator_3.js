class Generator {
    constructor (max) {
        this.max = max;
    }

    generate() {
        return Math.random() * this.max;
    }
}

module.exports = { // retorno módulo tem cache
    Generator
}