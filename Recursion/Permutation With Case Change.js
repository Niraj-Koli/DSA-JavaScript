// Permutation With Case Change //

const input = "ab";
const output = "";

function permutationWithCaseChange(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    let out1 = output;
    let out2 = output;

    out1 += input[0];
    out2 += input[0].toUpperCase();

    input = input.slice(1);

    permutationWithCaseChange(input, out1);
    permutationWithCaseChange(input, out2);
}

permutationWithCaseChange(input, output);
