function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}


const checkAges = (age) => {
    return age > 18 ? true: 'Родители разрешили?'
}
