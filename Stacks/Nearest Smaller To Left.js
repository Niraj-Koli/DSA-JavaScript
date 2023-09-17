// Find the each element's smaller left in an array and return the array if there is no smaller element return -1 //

const nums = [4, 5, 2, 10, 8];

function nsl(nums) {
    let stack = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0) {
            result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            result.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
            while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
                stack.pop();
            }

            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1]);
            }
        }

        stack.push(nums[i]);
    }

    return result;
}

console.log(nsl(nums));
