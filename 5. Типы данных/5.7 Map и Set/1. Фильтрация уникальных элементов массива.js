const unique = (arr) => [...new Set(arr)]

let values = [ "one", "one", "second", "second", "second", "second", "one", "one", ":-O" ];

console.log( unique(values) ); // Hare,Krishna,:-O
