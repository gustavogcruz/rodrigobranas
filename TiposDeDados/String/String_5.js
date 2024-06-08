let counter = 0;
console.time("performance");
while (counter < 100000) {
    new String("JavaScript");
    counter++
}

console.timeEnd("performance");