// Find an element in a bitonic array //

const items = [1, 3, 8, 12, 4, 2];
const element = 4;

function peakElement(items) {
    let start = 0;
    let end = items.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (middle > 0 && middle < items.length - 1) {
            if (
                items[middle] > items[middle - 1] &&
                items[middle] > items[middle + 1]
            ) {
                return middle;
            } else if (items[middle - 1] < items[middle]) {
                start = middle + 1;
            } else if (items[middle - 1] > items[middle]) {
                end = middle - 1;
            }
        } else if (middle === 0) {
            if (items[middle] > items[middle + 1]) {
                return middle;
            } else {
                return middle + 1;
            }
        } else if (middle === items.length - 1) {
            if (items[middle] > items[middle - 1]) {
                return middle;
            } else {
                return middle - 1;
            }
        }
    }
}

function binarySearch(items, start, end, element) {
    while (start <= end) {
        let middle = start + (end - start) / 2;

        if (items[middle] === element) {
            return middle;
        } else if (items[middle] < element) {
            start = middle + 1;
        } else if (items[middle] > element) {
            end = middle - 1;
        }
    }
    return -1;
}

function bitonicElement(items, element) {
    let peak = peakElement(items);

    let firstEle = binarySearch(items, 0, peak - 1, element);
    let secondEle = binarySearch(items, peak, items.length - 1, element);

    if (firstEle > secondEle) {
        return firstEle;
    } else {
        return secondEle;
    }
}

console.log(bitonicElement(items, element));
