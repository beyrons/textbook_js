function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' ')
        let a = +split[0]
        let sign = split[1]
        let b = +split[2]

        if (!this.methods[sign] || isNaN(a) || isNaN(b)) { return 'not valid data' }

        return this.methods[sign](a, b);
    }

    this.addMethod = (name, func) => this.methods[name] = func
}


let calc = new Calculator()
console.log( calc.calculate('3 + 5') )

calc.addMethod('*', (a, b) => a * b)
console.log( calc.calculate('3 * 5') )
console.log( calc.calculate('3 * b') )
