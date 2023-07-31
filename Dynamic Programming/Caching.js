// Caching //

function addTo100(n) {
    return n + 100;
}

function memoizedAddTo100() {
    let cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Not Cached");
            cache[n] = n + 100;
            return cache[n];
        }
    };
}

const memoized = memoizedAddTo100();

console.log("1:", memoized(17));
console.log("2:", memoized(17));
