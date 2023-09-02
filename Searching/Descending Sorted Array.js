// Find element in a descending sorted array //

const item = [20, 17, 14, 13, 10, 9, 6, 3, 1];
const element = 3;

function binarySearch(arr, ele) {
    let start = 0;
    let end = arr.length - 1;

    let middle = Math.floor(start + (end - start) / 2);

    while (arr[middle] !== ele && start <= end) {
        if (ele < arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor(start + (end - start) / 2);
    }

    return arr[middle] === ele ? middle : -1;
}

console.log(binarySearch(item, element));
