const values = [1, 2, 3, 4, 5];

function LogAllNumbersAndPairSumsOfArray(numbers) {
    console.log("Numbers:");
    numbers.forEach((num) => console.log(num)); // O(n) //

    console.log("Sums:");
    numbers.forEach((firstNum) => {
        // O(n) //
        numbers.forEach((secondNum) => {
            // O(n) //
            console.log(firstNum + secondNum);
        });
    });
}

// O(n + n * n) -> O(n + n^2) -> O(n^2) //
LogAllNumbersAndPairSumsOfArray(values);
