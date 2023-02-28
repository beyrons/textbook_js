let arr = [5, 3, 8, 1];

// больше или равными a && меньше или равными b
const filterRange = (arr, a, b) => arr.filter( ( i ) => i >= a && i <= b)

let filtered = filterRange(arr, 1, 4);
console.log( filtered );    // 3, 1

