function generateSerial(max) {
    max = max || 10000; // se max for falso, retorna 10000
    return Math.floor(Math.random() * max);
}

console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());