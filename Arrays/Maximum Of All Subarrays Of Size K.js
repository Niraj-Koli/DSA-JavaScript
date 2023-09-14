// Find maximum of each window and output it in a array //

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

function maxSubarray(nums, k) {
    let i = 0;
    let j = 0;

    let support = [];
    let result = [];

    while (j < nums.length) {
        while (support.length > 0 && support[support.length - 1] <= nums[j]) {
            support.pop();
        }

        support.push(nums[j]);

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            result.push(support[0]);

            if (nums[i] === support[i]) {
                support.shift();
            }
            j++;
            i++;
        }
    }
    return result;
}

console.log(maxSubarray(nums, k));
