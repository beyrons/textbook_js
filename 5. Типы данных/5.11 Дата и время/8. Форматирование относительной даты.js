const formatDate = (date) => {
    // разница в миллисекундах
    let diffMs = new Date() - date;             // меньше секунды
    if (diffMs < 1000)  return 'now'

    let sec = Math.floor(diffMs / 1000);        // разница в секундах
    if (sec < 60) return sec + ' сек. назад'

    let min = Math.floor(diffMs / 60000);       // разница в минутах
    if (min < 60) return min + ' мин. назад'

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log( formatDate(new Date(new Date - 1)) )
console.log( formatDate(new Date(new Date - 30 * 1000)) )
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) )
console.log( formatDate(new Date(new Date - 86400 * 1000)) )
