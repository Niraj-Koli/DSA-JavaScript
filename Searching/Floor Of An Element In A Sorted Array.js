// Find floor of an element in a sorted array //

const items = [1, 2, 4, 8, 10, 10, 12, 19];
const element = 5;

function floorElement(items, element) {
    let start = 0;
    let end = items.length - 1;

    let result = 0;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === element) {
            return items[middle];
        } else if (items[middle] < element) {
            result = items[middle];

            start = middle + 1;
        } else if (items[middle] > element) {
            end = middle - 1;
        }
    }

    return result;
}

console.log(floorElement(items, element));
