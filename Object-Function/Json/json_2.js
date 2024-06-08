//parse - converte um JSON para determinado tipo de dado

JSON.parse('10');
JSON.parse('"JavaScript"');
JSON.parse('true');
JSON.parse('false');
const obj = JSON.parse('{"name":"Self","paradigm":"OO"}');
JSON.parse('[1,2,3,4,5,6,7,8,9]');
JSON.parse('null');

console.log(obj);