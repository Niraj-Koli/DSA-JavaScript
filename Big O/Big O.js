const kaizer = ["Kaizer"]; // O(1) // -> Constant Time //

const buddies = [
    "Vivy",
    "Dante",
    "Hertz",
    "Nero",
    "Kaizer",
    "Pearl",
    "Kira",
    "Ray",
    "Sky",
    "Azrael",
]; // O(10) // -> Constant Time //

// const alpha = new Array(1000).fill("Kaizer");

// const beta = new Array(10000).fill("Kaizer");

// array -> n //

function findStuff(array) {
    let t0 = performance.now();

    for (let i = 0; i < array.length; i++) {
        console.log("Finding");
        if (array[i] === "Kaizer") {
            // O(n) // -> Linear Time //
            console.log("Found Kaizer!");
            break;
        }
    }

    let t1 = performance.now();

    console.log(`Time Of Execution: ${t1 - t0} milliseconds.\n`);
}

findStuff(kaizer);
findStuff(buddies);
// findStuff(alpha);
// findStuff(beta);
