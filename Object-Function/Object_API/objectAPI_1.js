const javascript = Object.create({});

// Object.assign - faz cópia das propriedades entre objetos
Object.assign(javascript, { // objeto alvo - javascript
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, 
{
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
});

console.log(javascript);