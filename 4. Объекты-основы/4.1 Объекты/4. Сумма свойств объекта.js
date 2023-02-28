let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};


const sumSalary = (data) => {
    return Object.values(data).reduce((a,b) => a+b, 0)
}



console.log(sumSalary(salaries)); // 390
