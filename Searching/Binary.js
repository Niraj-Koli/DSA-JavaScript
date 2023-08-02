// Binary Search //

// O(log n) - Binary Search //

const buddies = ["Kaizer", "Vivy", "Dante", "Nero", "Hertz"];

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);

    while (arr[middle] !== value && left <= right) {
        if (value < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((right + left) / 2);
    }

    return arr[middle] === value ? `Found ${value} At Index ${middle}` : -1;
}

console.log(binarySearch(buddies, "Nero"));
