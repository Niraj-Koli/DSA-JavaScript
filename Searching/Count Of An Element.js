// count of an array in a sorted array //

const items = [2, 4, 10, 10, 10, 18, 20];
const element = 10;

function firstOcc(items, ele) {
    let start = 0;
    let end = items.length - 1;

    let result = -1;

    while (start <= end) {
        let middle = start + (end - start) / 2;

        if (ele === items[middle]) {
            result = middle;

            end = middle - 1;
        } else if (ele < items[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return result;
}

function lastOcc(items, ele) {
    let start = 0;
    let end = items.length - 1;

    let result = -1;

    while (start <= end) {
        let middle = start + (end - start) / 2;

        if (ele === items[middle]) {
            result = middle;

            start = middle + 1;
        } else if (ele < items[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return result;
}

function countOfEle(items, ele) {
    let first = firstOcc(items, ele);
    let last = lastOcc(items, ele);

    return last - first + 1;
}

console.log(countOfEle(items, element));
