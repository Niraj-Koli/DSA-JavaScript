// Given two strings s and t find a substring which involes t in s and return it //

const s = "timetopractice";
const t = "toct";

function minimumWindowSubstring(s, t) {
    let map = new Map();

    for (let char of t) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }

    let i = 0;
    let j = 0;

    let winStart = 0;
    let winEnd = 0;
    let winSize = Number.MAX_SAFE_INTEGER;

    let count = map.size;

    while (j < s.length) {
        if (map.has(s[j])) {
            map.set(s[j], map.get(s[j]) - 1);

            if (map.get(s[j]) === 0) {
                count--;
            }
        }

        if (count === 0) {
            while (count === 0) {
                if (map.has(s[i])) {
                    map.set(s[i], map.get(s[i]) + 1);

                    if (map.get(s[i]) === 1) {
                        count++;

                        if (winSize > j - i + 1) {
                            winStart = i;
                            winEnd = j + 1;
                            winSize = Math.min(winSize, j - i + 1);
                        }
                    }
                }
                i++;
            }
        }
        j++;
    }

    return [s.slice(winStart, winEnd), winSize];
}

console.log(minimumWindowSubstring(s, t));
