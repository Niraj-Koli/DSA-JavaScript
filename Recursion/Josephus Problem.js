// Josephus Problem //

function main() {
    let n = 40;
    let k = 7;
    let index = 0;
    let ans = -1;

    let soldiers = [];

    for (let i = 1; i <= n; i++) {
        soldiers.push(i);
    }

    return josephusProblem(soldiers, k, index, ans);
}

function josephusProblem(soldiers, k, index, ans) {
    if (soldiers.length === 1) {
        ans = soldiers[0];
        return ans;
    }

    index = (index + (k - 1)) % soldiers.length;

    soldiers.splice(index, 1);

    return josephusProblem(soldiers, k, index, ans);
}

console.log(main());
