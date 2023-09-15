// Implement a stack to find minimum element //

let stack = [];
let supStack = [];

function push(ele) {
    stack.push(ele);

    if (supStack.length === 0 || supStack[supStack.length - 1] >= ele) {
        supStack.push(ele);
    }

    return;
}

function pop() {
    if (stack.length === 0) {
        return -1;
    }

    let ans = stack[stack.length - 1];

    stack.pop();

    if (supStack[supStack.length - 1] === ans) {
        supStack.pop();
    }
    return ans;
}

function getMin() {
    if (supStack.length === 0) {
        return -1;
    }
    return supStack[supStack.length - 1];
}
