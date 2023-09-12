// Find the largest subarray in a given array with sum k //

const nums = [4, 1, 1, 1, 2, 3, 5];
const k = 5;

function largestSubarray(nums, k) {
    let i = 0;
    let j = 0;

    let max = 0;
    let sum = 0;

    while (j < nums.length) {
        sum = sum + nums[j];

        if (sum < k) {
            j++;
        } else if (sum === k) {
            max = Math.max(max, j - i + 1);
            j++;
        } else if (sum > k) {
            while (sum > k) {
                sum = sum - nums[i];
                i++;
            }
            j++;
        }
    }

    return max;
}

console.log(largestSubarray(nums, k));
