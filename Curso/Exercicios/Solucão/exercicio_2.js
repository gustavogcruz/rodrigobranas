/*
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por 
diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada 
objeto distinto.
*/

const statement = "create table author (id number, name string, age number, city string, state string, country string)"
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(",");

// console.log(parsedStatement);
// console.log(tableName);
// console.log(columns);

const database = {
    tables: {
       [tableName]:{
            columns: {},
            data: []
       } 
    }
};

for (let column of columns) {
    column = column.trim().split(" "); // retorna um array
    const name = column[0]; //index 0
    const type = column[1]; //index 1
    database.tables[tableName].columns[name] = type; // chaves computadas []
}

console.log(JSON.stringify(database, undefined, " "));