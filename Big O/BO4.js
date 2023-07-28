function BO4Alpha(boxes) {
    boxes.forEach((box) => console.log(box)); // O(n) //

    boxes.forEach((box) => console.log(box)); // O(n) //
}

// O(n + n) => O(2n) => O(n) //

function BO4Beta(boxes1, boxes2) {
    boxes1.forEach((box) => console.log(box)); // O(a) //
    boxes2.forEach((box) => console.log(box)); // O(b) //
}

// O(a + b) //
