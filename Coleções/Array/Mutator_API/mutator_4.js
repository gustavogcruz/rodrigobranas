/* Mutator Methos - quando invocados modificam o array*/

/*
push - adiciona um elemento no final
pop - remove um elemento do final
unshift - adiciona um elemento no início
shift - remove um elemento no início
splice - remove, substitui ou adiciona um ou mais elementos em uma determinada posição
sort - ordena os elementos de acordo com a função de ordenação
reverse - inverte a ordem dos elementos
fill - preenche os elementos de acordo com a posição de início e fim
*/

const languages = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];


// languages.sort(function(a,b) {
//     return 0; //caso retorne -1 ou 0 os elementos ficam onde estão
// });

// languages.sort(function(a,b) {
//     return a.year - b.year
// });

// languages.sort(function(a,b) {
//     return (a.name <= b.name) ? -1 : 1;
// });

languages.sort(function(a,b) {
    return a.name.localeCompare(b.name); //* -1;
});


console.log(languages);

