// tipos primitivos

typeof 10;
typeof "JavaScript";
typeof true;
typeof Symbol("iterator");
typeof null;
typeof undefined;

(10).toFixed(2);
('JavaScript').replace('a', 4);
(true).toString();
(Symbol("iterator")).toString();

//object - function

typeof function sum(a,b) {return a + b};
typeof {name: "Linus Torvalds"};
typeof [1,2,3,4,5,6];
typeof /[a-zA-z_$]+/;
typeof (new Date());

