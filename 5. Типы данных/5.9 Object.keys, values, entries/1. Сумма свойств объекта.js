let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


const sumSalaries = (arr) => Object.values( arr ).reduce((acc, curr) => acc + curr, 0)

console.log( sumSalaries(salaries) )
