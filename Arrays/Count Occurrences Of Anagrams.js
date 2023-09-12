// count occurrences of anagrams in a string //

const string = "aabaabaa";
const pattern = "aaba";

function countAnagrams(string, pattern) {
    let map = new Map();

    for (let key of pattern) {
        if (!map.get(key)) {
            map.set(key, 1);
        } else {
            let counter = map.get(key);
            map.set(key, counter + 1);
        }
    }

    let count = map.size;

    let i = 0;
    let j = 0;
    let answer = 0;

    while (j < string.length) {
        if (map.has(string[j])) {
            let countEach = map.get(string[j]);
            map.set(string[j], countEach - 1);
        }

        if (map.get(string[j]) === 0) {
            count--;
        }

        if (j - i + 1 < pattern.length) {
            j++;
        } else if (j - i + 1 === pattern.length) {
            if (count === 0) {
                answer++;
            }

            if (map.has(string[i])) {
                let countEach = map.get(string[i]);
                map.set(string[i], countEach + 1);
            }

            if (map.get(string[i]) === 1) {
                count++;
            }

            j++;
            i++;
        }
    }

    return answer;
}

console.log(countAnagrams(string, pattern));
