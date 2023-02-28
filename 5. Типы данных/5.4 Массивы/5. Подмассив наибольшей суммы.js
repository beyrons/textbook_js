const arr = [1, -2, 3, 4, -9, 6]

const getMaxSubSum = (arr) => {
    let maxSum = 0
    let currSum = 0

    for(let i of arr) {
        currSum += i
        maxSum = Math.max( currSum, maxSum )
        if(currSum < 0) { currSum = 0 }
    }

    return maxSum
}


console.log( getMaxSubSum(arr) )
