let user = {
    name: "Василий Иванович",
    age: 35
};

const parse = (obj) => JSON.parse(JSON.stringify(obj));

console.log( parse(user) )
