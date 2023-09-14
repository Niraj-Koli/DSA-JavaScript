// Find the maximum sum of a subarray with size k // Sliding window //

const nums = [2, 5, 1, 8, 2, 9, 1];
const k = 3;

function maxSum(nums, k) {
    let i = 0;
    let j = 0;

    let sum = 0;
    let maxSum = 0;

    while (j < nums.length) {
        sum = sum + nums[j];

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            maxSum = Math.max(maxSum, sum);
            sum = sum - nums[i];
            j++;
            i++;
        }
    }
    return maxSum;
}

console.log(maxSum(nums, k));
