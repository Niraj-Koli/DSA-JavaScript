const values = ["A", "B", "C", "D"];

function LogAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        // O(n) //
        for (let j = 0; j < array.length; j++) {
            // O(n) //
            console.log(array[i], array[j]);
        }
    }
}

// O(n * n) -> O(n^2) // -> Quadratic Time //
LogAllPairsOfArray(values);

// Ordered Steps -> + //
// Nested Steps -> * //
