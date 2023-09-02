// Give an array from 1 to n find the duplicate number and the missing number //

const items = [2, 3, 1, 6, 1, 3, 4, 8];

function swap(arr) {
    let i = 0;
    let temp = 0;

    while (i < arr.length) {
        if (arr[i] !== arr[arr[i] - 1]) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        } else {
            i++;
        }
    }
}

function found(items) {
    swap(items);

    let missingItems = [];
    let duplicateItems = [];

    for (let j = 0; j < items.length; j++) {
        if (items[j] !== j + 1) {
            duplicateItems.push(items[j]);
            missingItems.push(j + 1);
        }
    }

    return [missingItems, duplicateItems];
}

let [missingItems, duplicateItems] = found(items);

console.log(missingItems);
console.log(duplicateItems);
