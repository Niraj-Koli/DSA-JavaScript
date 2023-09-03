// Binary Search //

// O(log n) - Binary Search //

const buddies = ["Kaizer", "Vivy", "Dante", "Nero", "Hertz"];

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    let middle = Math.floor((start + end) / 2);
    // let middle = Math.floor((start + (end - start) / 2));

    while (arr[middle] !== value && start <= end) {
        if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }

    return arr[middle] === value ? `Found ${value} At Index ${middle}` : -1;
}

console.log(binarySearch(buddies, "Nero"));
