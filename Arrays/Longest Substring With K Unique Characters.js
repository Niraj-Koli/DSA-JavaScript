// Find the longest substring with K unique characters //

// Pick Toys Question -> K = 2 //

const str = "aabacbebebe";
const k = 3;

function longestSubstring(str, k) {
    let i = 0;
    let j = 0;

    let max = 0;

    let map = new Map();

    while (j < str.length) {
        if (!map.has(str[j])) {
            map.set(str[j], 1);
        } else {
            let count = map.get(str[j]);
            map.set(str[j], count + 1);
        }

        if (map.size < k) {
            j++;
        } else if (map.size === k) {
            max = Math.max(max, j - i + 1);
            j++;
        } else if (map.size > k) {
            while (map.size > k) {
                let count = map.get(str[i]);
                map.set(str[i], count - 1);

                if (map.get(str[i]) === 0) {
                    map.delete(str[i]);
                }

                i++;
            }
            j++;
        }
    }

    return max;
}

console.log(longestSubstring(str, k));
