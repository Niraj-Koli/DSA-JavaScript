// Find last occurence of an element in a sorted array //

const items = [2, 4, 10, 10, 10, 18, 20];
const element = 10;

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

console.log(lastOcc(items, element));
