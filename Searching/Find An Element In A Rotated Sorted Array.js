// Find an element in a rotated sorted array //

const items = [11, 12, 15, 18, 2, 5, 6, 8];
const element = 15;

function binarySearch(items, start, end, ele) {
    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === ele) {
            return middle;
        } else if (items[middle] > ele) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

function rotatedValue(items) {
    let start = 0;
    let end = items.length - 1;

    let totalElements = items.length;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        let next = (middle + 1) % totalElements;
        let prev = (middle + totalElements - 1) % totalElements;

        if (items[middle] <= items[next] && items[middle] <= items[prev]) {
            return middle;
        } else if (items[middle] <= items[end]) {
            end = middle - 1;
        } else if (items[middle] >= items[start]) {
            start = middle + 1;
        }
    }

    return -1;
}

function elementInRotated(items, element) {
    let minimumElementIndex = rotatedValue(items);
    let firstElement = binarySearch(items, 0, minimumElementIndex - 1, element);
    let secondElement = binarySearch(
        items,
        minimumElementIndex,
        items.length - 1,
        element
    );

    if (firstElement > secondElement) {
        return firstElement;
    } else if (secondElement > firstElement) {
        return secondElement;
    } else {
        return -1;
    }
}

console.log(elementInRotated(items, element));
