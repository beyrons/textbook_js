let arr = [5, 3, 8, 1];

// удалить все значения кроме тех, которые находятся между a и b
const filterRangeInPlace = (arr, a, b) => {
    return arr.filter((item) => a < item && item < b)
}

console.log( filterRangeInPlace(arr, 1, 4) )    // 3
