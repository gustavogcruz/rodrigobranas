const b = require("./b");
console.log(b);

module.exports = {
    value: 100 + b.value
}