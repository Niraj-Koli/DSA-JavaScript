// Give a array find how many times the sorted array is rotated //

const items = [11, 12, 15, 18, 2, 5, 6, 8];

function rotatedValue(items) {
    let start = 0;
    let end = items.length - 1;

    let totalElements = items.length;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        let next = (middle + 1) % totalElements;
        let prev = (middle - 1 + totalElements) % totalElements;

        if (items[middle] <= items[next] && items[middle] <= items[prev]) {
            return middle;
        } else if (items[middle] <= items[end]) {
            end = middle - 1;
        } else if (items[middle] >= items[start]) {
            start = middle + 1;
        }
    }

    return 0;
}

console.log(rotatedValue(items));
