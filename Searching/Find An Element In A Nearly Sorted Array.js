// Find an element in a nearly sorted array //

const items = [5, 10, 30, 20, 40];
const element = 20;

function nearlySorted(items, element) {
    let start = 0;
    let end = items.length - 1;

    while (start <= end) {
        let middle = start + (end - start) / 2;

        if (items[middle] === element) {
            return middle;
        } else if (middle - 1 >= start && items[middle - 1] === element) {
            return middle - 1;
        } else if (middle + 1 <= end && items[middle + 1] === element) {
            return middle + 1;
        }

        if (items[middle] > element) {
            end = middle - 2;
        } else if (items[middle] < element) {
            start = middle + 2;
        }
    }
    return -1;
}

console.log(nearlySorted(items, element));
