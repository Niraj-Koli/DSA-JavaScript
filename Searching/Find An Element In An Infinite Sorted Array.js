// Consider a infinite sorted array and find an element in it //

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const element = 7;

function infiniteElement(items, element) {
    let start = 0;
    let end = 1;

    while (element > items[end]) {
        start = end;
        end = end * 2;
    }

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (items[middle] === element) {
            return middle;
        } else if (items[middle] < element) {
            start = middle + 1;
        } else if (items[middle] > element) {
            end = middle - 1;
        }
    }
}

console.log(infiniteElement(items, element));
