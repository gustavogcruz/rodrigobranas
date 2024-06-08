const languages = [];
languages[0] = "Python";
languages[10] = "C";
languages[20] = "Java";

console.log(languages);
console.log(languages.length);

delete languages[1]; // não recomendado usar o delete, pois não altera o length
console.log(languages);
console.log(languages.length);