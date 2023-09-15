// Given an array which represent height of a histogram return the value of area of rectangle which is maximum //

const height = [6, 2, 5, 4, 5, 1, 6];

function nsl(nums) {
    let stack = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0) {
            result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1][0] < nums[i]) {
            result.push(stack[stack.length - 1][1]);
        } else if (stack.length > 0 && stack[stack.length - 1][0] >= nums[i]) {
            while (stack.length > 0 && stack[stack.length - 1][0] >= nums[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1][1]);
            }
        }

        stack.push([nums[i], i]);
    }

    return result;
}

function nsr(nums) {
    let stack = [];
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            result.push(7);
        } else if (stack.length > 0 && stack[stack.length - 1][0] < nums[i]) {
            result.push(stack[stack.length - 1][1]);
        } else if (stack.length > 0 && stack[stack.length - 1][0] >= nums[i]) {
            while (stack.length > 0 && stack[stack.length - 1][0] >= nums[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                result.push(7);
            } else {
                result.push(stack[stack.length - 1][1]);
            }
        }

        stack.push([nums[i], i]);
    }

    return result.reverse();
}

function mah(height) {
    let left = nsl(height);
    let right = nsr(height);

    let width = [];
    let area = [];

    for (let i = 0; i < left.length; i++) {
        width[i] = right[i] - left[i] - 1;
    }

    for (let j = 0; j < width.length; j++) {
        area[j] = height[j] * width[j];
    }

    return Math.max(...area);
}

console.log(mah(height));
