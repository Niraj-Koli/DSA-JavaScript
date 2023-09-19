// Letter Case Permutation //

function main() {
    const input = "a1B2";
    const output = "";

    const result = [];

    letterCasePermutation(input, output, result);

    return result;
}

function isAlpha(char) {
    return /^[A-Za-z]$/g.test(char);
}

function letterCasePermutation(input, output, result) {
    if (input.length === 0) {
        result.push(output);
        return;
    }

    if (isAlpha(input[0])) {
        let out1 = output;
        let out2 = output;

        out1 += input[0].toLowerCase();
        out2 += input[0].toUpperCase();

        input = input.slice(1);

        letterCasePermutation(input, out1, result);
        letterCasePermutation(input, out2, result);
    } else {
        let out1 = output;

        out1 += input[0];

        input = input.slice(1);

        letterCasePermutation(input, out1, result);
    }
}

console.log(main());
