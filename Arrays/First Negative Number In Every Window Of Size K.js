// Find the first negative number in every window of size k return 0 if not //

const nums = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;

function negativeNumber(nums, k) {
    let i = 0;
    let j = 0;

    let result = [];
    let vector = [];

    while (j < nums.length) {
        if (nums[j] < 0) {
            vector.push(nums[j]);
        }

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            if (vector.length === 0) {
                result.push(0);
            } else {
                result.push(vector[0]);

                if (nums[i] === vector[0]) {
                    vector.shift();
                }
            }
            j++;
            i++;
        }
    }
    return result;
}

console.log(negativeNumber(nums, k));
