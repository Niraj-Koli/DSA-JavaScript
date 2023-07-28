function BO1(input) {
    let a = 10; // O(1) //
    a = 50 + 3; // O(1) //

    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // O(n) //
        let stranger = true; // O(n) //
        a++; // O(n) //
    }
    return a; // O(1) //
}

// Big O(3 + 3n) -> O(n) //
