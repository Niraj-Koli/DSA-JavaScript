// Find the longest substring without repeating characters //

const str = "pwwkew";

function longestSubstring(str) {
    let i = 0;
    let j = 0;

    let len = 0;

    let map = new Map();

    while (j < str.length) {
        if (map.has(str[j])) {
            i = Math.max(map.get(str[j]) + 1, i);
        }

        map.set(str[j], j);

        len = Math.max(len, j - i + 1);

        j++;
    }

    return len;
}

console.log(longestSubstring(str));
