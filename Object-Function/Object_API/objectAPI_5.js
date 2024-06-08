const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

const javascript2 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};

console.log(Object.is(javascript, javascript)); // Object.is - similar a ===
console.log(Object.is(javascript, javascript2));