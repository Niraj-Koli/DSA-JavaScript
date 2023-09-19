// Generate all balanced parentheses //

const n = 3;

function main(n) {
    let open = n;
    let close = n;

    let output = "";

    let resultArray = [];

    balancedParentheses(open, close, output, resultArray);

    return resultArray;
}

function balancedParentheses(open, close, output, resultArray) {
    if (open === 0 && close === 0) {
        resultArray.push(output);
        return;
    }

    if (open !== 0) {
        let out1 = output;

        out1 += "(";

        balancedParentheses(open - 1, close, out1, resultArray);
    }

    if (close > open) {
        let out2 = output;

        out2 += ")";

        balancedParentheses(open, close - 1, out2, resultArray);
    }
}

console.log(main(n));
