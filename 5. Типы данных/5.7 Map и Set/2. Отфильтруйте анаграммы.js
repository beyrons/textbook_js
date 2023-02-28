let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let obj = {};

    for (let i=0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split('').sort().join('')
        obj[sorted] = arr[i]
    }

    return obj
}

console.log( aclean(arr) )
