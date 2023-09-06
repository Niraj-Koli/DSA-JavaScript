// Find a peak element in a unsorted array //
// Find maximum element in a bitonic array //

const items = [5, 10, 20, 15];

function peakElement(items) {
    let start = 0;
    let end = items.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (middle > 0 && middle < items.length - 1) {
            if (
                items[middle] > items[middle - 1] &&
                items[middle] > items[middle + 1]
            ) {
                return items[middle];
            } else if (items[middle - 1] < items[middle]) {
                start = middle + 1;
            } else if (items[middle - 1] > items[middle]) {
                end = middle - 1;
            }
        } else if (middle === 0) {
            if (items[middle] > items[middle + 1]) {
                return items[middle];
            } else {
                return items[middle + 1];
            }
        } else if (middle === items.length - 1) {
            if (items[middle] > items[middle - 1]) {
                return items[middle];
            } else {
                return items[middle - 1];
            }
        }
    }
}

console.log(peakElement(items));
