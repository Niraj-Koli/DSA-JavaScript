// Given array find the consecutive smaller or equal to the previous dates //

const nums = [100, 80, 60, 70, 60, 75, 85];

function stockSpan(nums) {
    let stack = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0) {
            result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1][0] > nums[i]) {
            result.push(stack[stack.length - 1][1]);
        } else if (stack.length > 0 && stack[stack.length - 1][0] <= nums[i]) {
            while (stack.length > 0 && stack[stack.length - 1][0] <= nums[i]) {
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

    for (let j = 0; j < result.length; j++) {
        result[j] = j - result[j];
    }

    return result;
}

console.log(stockSpan(nums));
