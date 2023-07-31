function recurringCharacter(input) {
    let charMap = {};

    for (let i = 0; i < input.length; i++) {
        if (charMap[input[i]] !== undefined) {
            return input[i];
        } else {
            charMap[input[i]] = i;
        }
    }
    return undefined;
}

console.log(recurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacter([2, 3, 4, 5]));
