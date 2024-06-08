//https://addyosmani.com/

var counter = 0;
var add = function () {
    return counter++;
}

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function (item) {
    itens.push(item);
    return itens;
};

console.log(add('T'));
console.log(add('H'));
console.log(add('E'));
console.log(add('O'));

//Encapsulando com objeto

var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());


var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('N'));
console.log(itens.add('A'));

console.log(counter.add());

//Encapsulando por função

var createCounter = function () {
    var value = 0;
    return {
        add: function () {
            return ++value;
        }
    };
}

var counter = createCounter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var Counter = function () {
    var value = 0;
    this.add = function () {
        return ++value;
    }
};

var counter = new Counter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//Module Pattern


var counter = (function () {
    var value = 0;
    return {
        add: function () {
            return ++value;
        },
        reset: function () {
            return value = 0;
        }
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

//Revealing Module Pattern

var counter = (function () {
    var _value = 0;
    var _add = function () {
        return ++_value;
    };
    var _reset = function () {
        _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());


