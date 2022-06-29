
function miniMaxSum(arr) {
    let tempArr = arr.sort()
    const minSum = tempArr.slice(0, -1).reduce(function(a, b) { return a + b; }, 0);
    const maxSum = tempArr.slice(1, 5).reduce(function(a, b) { return a + b; }, 0)

    console.log(String(minSum) + ' ' + String(maxSum))
}

const arr = [2,3,1,4,5];
miniMaxSum(arr);

