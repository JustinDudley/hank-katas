

function miniMaxSum(arr) {

let tempArr = arr.sort()

// console.log(tempArr)
// console.log(tempArr.slice(0, -1)).reduce(function(a, b) { return a + b; }, 0);
// console.log([1,2,3].reduce(function(a, b) { return a + b; }, 0)  )
// console.log(tempArr.slice(0, -1))


console.log(tempArr.slice(0, -1).reduce(function(a, b) { return a + b; }, 0))
console.log(tempArr.slice(0, 5).reduce(function(a, b) { return a + b; }, 0))

const minSum = tempArr.slice(0, -1).reduce(function(a, b) { return a + b; }, 0);
const maxSum = tempArr.slice(0, 5).reduce(function(a, b) { return a + b; }, 0)

console.log(String(minSum) + ' ' + String(maxSum))



// console.log(tempArr.splice(-1,1).reduce(function(a, b) { return a + b; }, 0))
}

const arr = [2,3,1,4,5];
    miniMaxSum(arr);

