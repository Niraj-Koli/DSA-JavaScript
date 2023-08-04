// Heap Sort //

const items = [10, 7, 21, 47, 73, 91, 36, 52, 2, 69];

// O(n log n) -> Linearithmic Time //

function heapSort(array) {
    let heapSize = array.length;

    buildHeap(array);

    while (heapSize > 1) {
        heapSize--;
        swap(array, 0, heapSize);
        heapify(array, heapSize, 0);
    }
}

function buildHeap(array) {
    const heapSize = array.length;

    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        heapify(array, heapSize, i);
    }
}

function heapify(heap, heapSize, i) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let largest = i;

    if (left < heapSize && heap[left] > heap[largest]) {
        largest = left;
    }

    if (right < heapSize && heap[right] > heap[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(heap, i, largest);
        heapify(heap, heapSize, largest);
    }
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

heapSort(items);
console.log(items);
