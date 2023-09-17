// Find how much water is stored between the buildings and return their sum. You are given height of building //

const height = [3, 0, 0, 2, 0, 4];

function rainWaterTrapping(height) {
    let mxl = [];
    let mxr = [];

    mxl[0] = height[0];

    for (let i = 1; i < height.length; i++) {
        mxl[i] = Math.max(mxl[i - 1], height[i]);
    }

    mxr[height.length - 1] = height[height.length - 1];

    for (let j = height.length - 2; j >= 0; j--) {
        mxr[j] = Math.max(mxr[j + 1], height[j]);
    }

    let water = [];

    for (let k = 0; k < height.length; k++) {
        water[k] = Math.min(mxl[k], mxr[k]) - height[k];
    }

    let sum = 0;

    for (let l = 0; l < water.length; l++) {
        sum += water[l];
    }

    return sum;
}

console.log(rainWaterTrapping(height));
