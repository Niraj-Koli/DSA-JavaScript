// Sort a array using recursion //

const nums = [5, 1, 0, 2];

function insert(nums, temp) {
    if (nums.length === 0 || nums[nums.length - 1] <= temp) {
        nums.push(temp);
        return nums;
    }

    let val = nums.pop();

    insert(nums, temp);

    nums.push(val);

    return nums;
}

function sort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let temp = nums.pop();

    sort(nums);

    return insert(nums, temp);
}

console.log(sort(nums));
