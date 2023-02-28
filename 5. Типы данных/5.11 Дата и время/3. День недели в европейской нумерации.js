const getLocalDay = (date) => {
    return date.getDay() === 0 ? 7 : date.getDay()
}

let date = new Date(2023, 1, 1)
console.log( getLocalDay(date) )
