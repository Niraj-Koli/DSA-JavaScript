// Solution 1 //

function mergeSortedArraysAlpha(arr1, arr2) {
    const mergedArray = [];

    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    let i = 1;
    let j = 1;

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArraysAlpha([0, 3, 4, 31], [4, 6, 30]));

// Solution 2 //

function mergeSortedArraysBeta(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArraysBeta([0, 3, 4, 31], [4, 6, 30]));

// Solution 3 //

const mergeSortedArraysGamma = (arr1, arr2) =>
    [...arr1, ...arr2].sort((a, b) => b - a);

console.log(mergeSortedArraysGamma([0, 3, 4, 31], [4, 6, 30]));
