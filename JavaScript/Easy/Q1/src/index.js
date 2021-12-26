/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * @description The Brute Force solution is to use 2 for loops and check the sum.
 * @param {number[]} nums input numbers array
 * @param {number} target Sum taregt to verify
 * @return {number[]} Returns indices of two numbers in the array such that they add  up to the given target.
 */
var twoSum1 = (nums, target) => {
    // If the given array is null or contains less than 2 elements then return null
    if (!nums || nums.length < 2) {
        return null;
    }

    for (var i = 0; i <= nums.length; i++) {
        for (var j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }

    return null;
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/**
 * Time Complexity: O(n^2)
 * Sapce Complexity: O(1)
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// #############################################################################

/**
 * @description The Best case solution is to use maps to track the array numbers.
 * @param {number[]} nums input numbers array
 * @param {number} target Sum taregt to verify
 * @return {number[]} Returns indices of two numbers in the array such that they add  up to the given target.
 */
var twoSum2 = (nums, target) => {
    // If the given array is null or contains less than 2 elements then return null
    if (!nums || nums.length < 2) {
        return null;
    }

    const map = {};
    for (var i = 0; i <= nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        }

        map[nums[i]] = i;
    }

    return null;
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/**
 * Time Complexity: O(n)
 * Sapce Complexity: O(n)
 */
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

export { twoSum1, twoSum2 };
