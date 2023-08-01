// Factorial //

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// O(n) -> Linear Time //
function factorialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5));

// O(n) -> Linear Time //
function factorialIterative(number) {
    let answer = 1;

    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }

    return answer;
}

console.log(factorialIterative(5));
