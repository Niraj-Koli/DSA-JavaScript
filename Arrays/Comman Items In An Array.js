// Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items // For Example:

// Solution 1 - Brute Force //

const items1 = ["a", "b", "c", "x"];
const items2 = ["x", "y", "z"];

function containsCommonItemAlpha(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// O (a * b) Time Complexity //
// O (1) Space Complexity //
console.log(containsCommonItemAlpha(items1, items2));

// Solution 2 - Hash Table (Objects In JavaScript) //

function containsCommonItemBeta(arr1, arr2) {
    // loop through first array and create object where properties === items in the array //

    let itemsObj = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!itemsObj[arr1[i]]) {
            itemsObj[arr1[i]] = true;
        }
    }

    console.log(itemsObj);

    // loop through second array and check if item in second array exists on created object. //

    for (let j = 0; j < arr2.length; j++) {
        if (itemsObj[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// O (a + b) Time Complexity //
// O (a) Space Complexity //
console.log(containsCommonItemBeta(items1, items2));

// Solution 3 - Built-In Methods //

function containsCommonItemGamma(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}

// O (a + b) Time Complexity //
// O (1) Space Complexity //

console.log(containsCommonItemGamma(items1, items2));
