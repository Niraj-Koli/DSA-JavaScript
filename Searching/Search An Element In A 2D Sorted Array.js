// Find an element in a row wise and column wise (2D) sorted array //

const items = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 42, 50],
];

const element = 29;

function twoDSearch(items, element) {
    let i = 0;
    let j = items.length - 1;

    while (i >= 0 && i < items.length && j >= 0 && j < items.length) {
        if (items[i][j] === element) {
            return [i, j];
        } else if (items[i][j] > element) {
            j--;
        } else if (items[i][j] < element) {
            i++;
        }
    }
    return -1;
}

console.log(twoDSearch(items, element));
