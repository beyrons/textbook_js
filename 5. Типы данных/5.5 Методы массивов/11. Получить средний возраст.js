let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length
}

console.log( getAverageAge(arr) );  // (25 + 30 + 29) / 3 = 28
