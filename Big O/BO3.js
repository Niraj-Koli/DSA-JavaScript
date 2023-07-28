function BO3(items) {
    console.log(items[0]); // O(1) //

    let middleIndex = Math.floor(items.length / 2); // O(1) //
    let index = 0; // O(1) //

    while (index < middleIndex) {
        console.log(items[index]); // O(n/2) //
    }

    for (let i = 0; i < 100; i++) {
        console.log("Yo!"); // O(100) //
    }
}

// O(1 + 1 + 1 + n/2 + 100) => O(103 + n/2) => O(n/2) => O(n) //
