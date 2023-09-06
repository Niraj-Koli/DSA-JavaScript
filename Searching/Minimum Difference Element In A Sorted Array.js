// Find minimum difference element when subracted with a the given key in sorted array //

const items = [1, 3, 8, 10, 15];
const key = 12;

function diffElement(items, key) {
    let start = 0;
    let end = items.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === key) {
            return items[middle];
        } else if (items[middle] < key) {
            start = middle + 1;
        } else if (items[middle] > key) {
            end = middle - 1;
        }
    }

    let firstDiff = Math.abs(key - items[start]);
    let secondDiff = Math.abs(key - items[end]);

    if (firstDiff > secondDiff) {
        return items[end];
    } else {
        return items[start];
    }
}

console.log(diffElement(items, key));
