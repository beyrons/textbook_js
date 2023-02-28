let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

const names = (arr) => arr.map( s => s.name )


console.log( names(users) )    // Вася, Петя, Маша
