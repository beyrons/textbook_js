let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

let user2 = {}


const isEmpty = (obj) => {
    return Object.keys(obj).length > 0
}

console.log( isEmpty(user) )
console.log( isEmpty(user2) )
