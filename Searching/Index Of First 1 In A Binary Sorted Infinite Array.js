// Find the index of first 1 in a binary sorted infinite array //

const items = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
];

function index1Infinite(items) {
    let start = 0;
    let end = 1;

    let result = 0;

    while (items[end] !== 1) {
        start = end;
        end = end * 2;
    }

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === 1) {
            result = middle;

            end = middle - 1;
        } else if (items[middle] < 1) {
            start = middle + 1;
        }
    }
    return result;
}

console.log(index1Infinite(items));
