function space(n) {
    for (let i = 0; i < n.length; i++) {
        // (let i ) -> O(1) //
        console.log("Space Complexity!");
    }
}

space([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // O(1) -> Constant Time //

function arrayofYoNTimes(n) {
    let yoArray = [];

    for (let i = 0; i < n; i++) {
        // (let i ) -> O(1) //
        yoArray[i] = "Yo"; // array[i] -> O(n) //
    }
    return yoArray;
}

console.log(arrayofYoNTimes(5)); // O(n) -> Linear Time //
