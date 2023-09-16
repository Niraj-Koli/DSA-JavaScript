// Implement a stack to find minimum element //

let stack = [];
let minEle = -1;

function push(x) {
    if (stack.length === 0) {
        stack.push(x);
        minEle = x;
    } else {
        if (x >= minEle) {
            stack.push(x);
        } else if (x < minEle) {
            stack.push(2 * x - minEle);
            minEle = x;
        }
    }
}

function pop() {
    if (stack.length === 0) {
        return -1;
    } else {
        if (stack[stack.length - 1] >= minEle) {
            stack.pop();
        } else if (stack[stack.length - 1] < minEle) {
            minEle = 2 * minEle - stack[stack.length - 1];
            stack.pop();
        }
    }
}

function top() {
    if (stack.length === 0) {
        return -1;
    } else {
        if (stack[stack.length - 1] >= minEle) {
            return stack[stack.length - 1];
        } else if (stack[stack.length - 1] < minEle) {
            return minEle;
        }
    }
}

function getMin() {
    if (stack.length === 0) {
        return -1;
    }
    return minEle;
}
