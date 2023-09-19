// Kth Symbol In A Grammar //

function kSymbolInGrammar(n, k) {
    if (n === 1 && k === 1) {
        return 0;
    }

    let mid = Math.pow(2, n - 1);

    if (k <= mid) {
        return kSymbolInGrammar(n - 1, k);
    } else {
        return !kSymbolInGrammar(n - 1, k - mid);
    }
}
