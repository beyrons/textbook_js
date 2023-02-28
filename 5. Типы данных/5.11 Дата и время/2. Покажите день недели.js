const getWeekDay = (dt) => {
    let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    return days[dt.getDay()];
}


let date = new Date(2023, 1, 1)

console.log( getWeekDay(date) )
