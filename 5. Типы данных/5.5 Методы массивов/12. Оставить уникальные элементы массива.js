let arr = [ "one", "one", "second", "second", "second", "second", "one", "one", ":-O" ];

const unique = (str) => [...new Set(str)]

console.log( unique(arr) )
