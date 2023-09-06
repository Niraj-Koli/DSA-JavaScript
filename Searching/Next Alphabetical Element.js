// Find next alphabet in an sorted array containing characters //

const items = ["a", "c", "f", "h"];
const element = "f";

function nextAlpha(items, element) {
    let start = 0;
    let end = items.length - 1;

    let result = "#";

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === element) {
            start = middle + 1;
        } else if (items[middle] < element) {
            start = middle + 1;
        } else if (items[middle] > element) {
            result = items[middle];

            end = middle - 1;
        }
    }

    return result;
}

console.log(nextAlpha(items, element));
