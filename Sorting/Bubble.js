// Bubble Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n^2) -> Quadratic Time //
function bubble(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
}

bubble(items);
console.log(items);
