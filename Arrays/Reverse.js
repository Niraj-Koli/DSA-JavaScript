// Solution 1 //

function reverseAlpha(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return "Empty Or Invalid String";
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join("");
}

console.log(reverseAlpha("Yo, My Name Is Kaizer!"));

// Solution 2 //

function reverseBeta(str) {
    return str.split("").reverse().join("");
}

console.log(reverseBeta("Yo, My Name Is Kaizer!"));

// Solution 3 //

const reverseGamma = (str) => [...str].reverse().join("");

console.log(reverseGamma("Yo, My Name Is Kaizer!"));
