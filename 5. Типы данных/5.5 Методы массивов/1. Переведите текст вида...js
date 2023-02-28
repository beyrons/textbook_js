const camelize = (str) => str.split('-').map( (s, index) => index === 0 ? s : s[0].toUpperCase() + s.slice(1) ).join('')

console.log( camelize("background-color") )     // 'backgroundColor'
console.log( camelize("list-style-image") )     // 'listStyleImage'
console.log( camelize("-webkit-transition") )   // 'WebkitTransition'
