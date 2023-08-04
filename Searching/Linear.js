// Linear Search //

// O(n) - Linear Search //

const buddies = ["Kaizer", "Vivy", "Dante", "Nero", "Hertz"];

console.log(buddies.indexOf("Dante"));

console.log(buddies.includes("Dante"));

console.log(buddies.findIndex((buddy) => buddy === "Dante"));

console.log(buddies.find((buddy) => buddy === "Dante"));

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return `Found ${value} At Index ${i}`;
        }
    }
    return -1;
}

console.log(linearSearch(buddies, "Dante"));
