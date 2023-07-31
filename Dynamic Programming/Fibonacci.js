// Fibonacci Sequence //

// O(2^n) -> Exponential Time //

let alpha = 0;

function fibonacci(n) {
    alpha++;

    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(30));
console.log(`${alpha} Calls Using Recursive Implementation.`);

// O(n) -> Linear Time //

let beta = 0;

function memoizedFibonacci() {
    let cache = {};

    return function fib(n) {
        beta++;

        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            }
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        }
    };
}

const memoized = memoizedFibonacci();

console.log(memoized(30));
console.log(`${beta} Calls Using Memoized Implementation.`);

// O(n) -> Linear Time //

function fib(n) {
    let answers = [0, 1];

    for (let i = 2; i <= n; i++) {
        answers.push(answers[i - 2] + answers[i - 1]);
    }
    return answers.pop();
}

console.log(fib(30));
