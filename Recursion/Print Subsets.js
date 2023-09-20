// Print subsets / powerset / subsequence of a given string //

const str = "ab";

function printSubsets(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    let out1 = output;
    let out2 = output;

    out2 += input[0];

    input = input.slice(1);

    printSubsets(input, out1);
    printSubsets(input, out2);
}

printSubsets(str, "");
