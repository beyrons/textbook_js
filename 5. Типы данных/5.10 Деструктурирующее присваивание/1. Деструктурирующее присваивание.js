let user = {
    name: "John",
    years: 30
};

const {name, years: age, isAdmin = false} = user;

console.log(`name: ${name}, age: ${age}, admin: ${isAdmin}`)
