// Recursion //

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and return when needed. (Usually you have 2 returns)

let counter = 0;

function inception1() {
    if (counter > 3) {
        return "Done!";
    }
    counter++;
    inception1(); // Returns undefined //
}

console.log(inception1());

function inception2() {
    if (counter > 3) {
        return "Done!";
    }
    counter++;
    return inception2(); // Returns "Done!" //
}

console.log(inception2());
