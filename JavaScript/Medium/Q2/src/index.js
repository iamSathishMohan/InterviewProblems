/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/**
 * @description The brute force approach using loops
 * @param {string} str input string
 * @return {Number} length of the longest substring
 */
var lengthOfLongestSubstring1 = (str) => {
    str = str || '';
    if (str.length < 2) {
        return str.length;
    }

    let max = 0;
    var chars = [];
    let left = 0,
        right = 0;

    while (right < str.length) {
        while (chars.indexOf(str[right]) !== -1) {
            chars.shift();
            left++;
        }

        chars.push(str[right]);
        right++;

        max = Math.max(max, chars.length);
    }
    return max;
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/**
 * Time Complexity: O(n^2)
 * Sapce Complexity: O(n)
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/**
 * @description The simple and readable solution is to use loops and generate sum node
 * @param {string} str input string
 * @return {Number} length of the longest substring
 */
var lengthOfLongestSubstring2 = (str) => {
    str = str || '';
    if (str.length < 2) {
        return str.length;
    }

    let resultSubStr = '';
    let currentSubStr = '';
    let current = 0;

    for (var i = 0; i < str.length; i++) {
        if (currentSubStr.includes(str[i])) {
            if (currentSubStr.length > resultSubStr.length) {
                resultSubStr = currentSubStr;
            }
            currentSubStr = '';
            i = current++;
        } else {
            currentSubStr = currentSubStr.concat(str[i]);
        }
    }

    if (currentSubStr.length > resultSubStr.length) {
        resultSubStr = currentSubStr;
    }

    return resultSubStr.length;
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/**
 * Time Complexity: O(n)
 * Sapce Complexity: O(n)
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// #############################################################################

/**
 * @description The simple and readable solution is to use loops and generate sum node
 * @param {string} str input string
 * @return {Number} length of the longest substring
 */
var lengthOfLongestSubstring3 = (str) => {
    str = str || '';
    if (str.length < 2) {
        return str.length;
    }

    const map = {};
    var max = 0;
    for (var i = 0, j = 0; i < str.length; i++) {
        if (str[i] in map) {
            j = Math.max(j, map[str[i]] + 1);
        }

        map[str[i]] = i;
        max = Math.max(max, i - j + 1);
    }

    return max;
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/**
 * Time Complexity: O(n)
 * Sapce Complexity: O(min(m,n))
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

export {
    lengthOfLongestSubstring1,
    lengthOfLongestSubstring2,
    lengthOfLongestSubstring3,
};
