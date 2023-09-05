// Allocate minimum number of pages to k students where in a continuous way. Every student should have to be allocate at least some pages. Pages of a book can not be split. Return the pages by minimizing the maximum numbers of page a student is allocated indirectly a student should read too much compare to other students //

const pagesOfBook = [10, 20, 30, 40];
const k = 2; // Number Of Students //

function isValid(array, numberOfStudents, size, maxPages) {
    let students = 1;
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += array[i];

        if (sum > maxPages) {
            students++;
            sum = array[i];
        }

        if (students > numberOfStudents) {
            return false;
        }
    }
    return true;
}

function allocatePages(items, k) {
    let start = Math.max(...items);
    let sum = 0;

    items.forEach((item) => (sum += item));

    let end = sum;

    let result = -1;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);

        if (isValid(items, items.length, k, middle)) {
            result = middle;

            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return [result, sum - result];
}

console.log(allocatePages(pagesOfBook, k));
