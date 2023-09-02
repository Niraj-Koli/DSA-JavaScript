// Google Question //

// given a array of numbers, return the pair of numbers that add up to 8 //

// Solution 1 - Brute Force //

function hasPairWithSum(arr, sum) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

// O (n^2) Time Complexity //
// O (1) Space Complexity //

console.log(hasPairWithSum([1, 2, 3, 9], 8));
console.log(hasPairWithSum([1, 2, 4, 4], 8));

// Solution 2 - Set //

function hasPairWithSum2(arr, sum) {
    const mySet = new Set();

    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

// O (n) Time Complexity //
// O (n) Space Complexity //

console.log(hasPairWithSum2([1, 2, 3, 9], 8));
console.log(hasPairWithSum2([1, 2, 4, 4], 8));
