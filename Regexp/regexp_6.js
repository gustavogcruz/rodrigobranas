let regExp = /john@gmail.com/;
let result = regExp.exec("E-Mail: john@gmailxcom");
console.log(result[0]);
console.log(result.index);
console.log(result.input);
