// Merge Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n log n) -> Linearithmic Time //

function mergeSort(array) {
    const length = array.length;

    if (length === 1) {
        return array;
    }

    const mid = Math.floor(length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sorted = mergeSort(items);
console.log(sorted);
