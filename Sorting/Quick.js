// Quick Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n log n) -> Linearithmic Time //

function quickSort(array, left, right) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }

    return array;
}

function partition(array, pivot, left, right) {
    const pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(array, right, partitionIndex);

    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const sorted = quickSort(items, 0, items.length - 1);
console.log(sorted);
