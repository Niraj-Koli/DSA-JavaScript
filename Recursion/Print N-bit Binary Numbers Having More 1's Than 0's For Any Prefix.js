// Print N-bit Binary Numbers Having More 1's Than 0's For Any Prefix //

function main() {
    let n = 3;
    let output = "";

    let ones = 0;
    let zeros = 0;

    prefixesOnes(ones, zeros, n, output);
}

function prefixesOnes(ones, zeros, n, output) {
    if (n === 0) {
        console.log(output);
        return;
    }

    let out1 = output;
    out1 += "1";

    prefixesOnes(ones + 1, zeros, n - 1, out1);

    if (ones > zeros) {
        let out2 = output;

        out2 += "0";

        prefixesOnes(ones, zeros + 1, n - 1, out2);
    }
    return;
}

main();
