// Find height of a binary tree //

function height(root) {
    if (root === null) {
        return 0;
    }

    let lh = height(root.left);
    let rh = height(root.right);

    return 1 + Math.max(lh, rh);
}
