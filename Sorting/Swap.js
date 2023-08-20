// Swap Sort //

const items = [2, 3, 5, 1, 4];

// O (n) -> Linear Time //

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

swap(items);
console.log(items);
