// Print unqiue subsets of a given string //

const str = "aab";
let set = new Set();

function printSubsets(input, output) {
    if (input.length === 0) {
        set.add(output);

        return;
    }

    let out1 = output;
    let out2 = output;

    out2 += input[0];

    input = input.slice(1);

    printSubsets(input, out1);
    printSubsets(input, out2);

    return set;
}

console.log(printSubsets(str, ""));
