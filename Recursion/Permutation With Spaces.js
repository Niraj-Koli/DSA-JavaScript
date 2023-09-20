// Permutation with space //

function main() {
    let input = "ABC";
    let output = "";

    output += input[0];
    input = input.slice(1);

    permutationWithSpace(input, output);
}

function permutationWithSpace(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    let out1 = output;
    let out2 = output;

    out1 += "_";
    out1 += input[0];

    out2 += input[0];

    input = input.slice(1);

    permutationWithSpace(input, out1);
    permutationWithSpace(input, out2);
}

main();
