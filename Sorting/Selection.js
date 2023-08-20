// Selection Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n^2) -> Quadratic Time //
function selection(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
}

selection(items);
console.log(items);
