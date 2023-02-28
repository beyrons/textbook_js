let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (data) => {
    for (let key in data) {
        if (typeof data[key] === 'number') { data[key] *= 2 }
    }
}

multiplyNumeric(menu);

console.log(menu)
