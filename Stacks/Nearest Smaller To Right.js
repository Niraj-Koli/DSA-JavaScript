// Find the each element's greater right in an array and return the array if there is no greater element return -1 //

const nums = [4, 5, 2, 10, 8];

function nsr(nums) {
    let stack = [];
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
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

    return result.reverse();
}

console.log(nsr(nums));
