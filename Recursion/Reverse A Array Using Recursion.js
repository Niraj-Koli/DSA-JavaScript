// Reverse a array using recursion //

const nums = [1, 2, 3, 4, 5];

function insert(nums, ele) {
    if (nums.length === 0) {
        nums.push(ele);

        return nums;
    }

    let temp = nums.pop();

    insert(nums, ele);

    nums.push(temp);

    return nums;
}

function reverse(nums) {
    if (nums.length === 1) {
        return nums;
    }

    let temp = nums.pop();

    reverse(nums);

    insert(nums, temp);

    return nums;
}

console.log(reverse(nums));
