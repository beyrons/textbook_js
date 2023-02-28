let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (data) => {
    return Object.values(data).reduce((a,b) => a+b, 0)
}

console.log(topSalary(salaries))
