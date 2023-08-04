// Insertion Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n^2) -> Quadratic Time //
function insertion(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            if (array[i] < array[i - 1]) {
                for (let j = 1; j < i; j++) {
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }
    }
}

insertion(items);
console.log(items);
