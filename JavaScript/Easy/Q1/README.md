# Two Sum

#### Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
    - [Example Testcases](#example-testcases)
        - [Example 1](#example-1)
        - [Example 2](#example-2)
        - [Example 3](#example-3)
        - [Example 4](#example-4)
    - [Constraints](#constraints)
    - [Follow-up](#follow-up)
- [Solutions](#solutions)
    - [Solution 1: Brute Force](#solution-1-brute-force)
        - [Complexity Analysis](#complexity-analysis)
    - [Solution 2: Using maps](#solution-2-using-maps)
        - [Complexity Analysis](#complexity-analysis-1)
- [Veify the Solution](#verify-the-solution)
    - [Pre Requisites](#pre-requisites)
    - [Execution Steps](#execution-steps)

## Overview

- **Difficulty:** :green_circle: ***Easy***
- **Solution:** JavaScript
- **Companies:** Facebook, Amazon, Microsoft, Oracle, LinkedIn, Airbnb
- **Source:** ***[Click Here](https://leetcode.com/problems/two-sum/)***


## Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

For instance, in Example 1 `[7,2,13,11]` is the given array and the given target sum is `9`. If we look at the given array, the parir which produce the given target sum is `(7,2) i.e. 7+2 = 9`. So the algorithm should return `[0,1]` (indices of 7 and 2 respectively) as the result. 

### Example Testcases

#### Example 1
```
Input: nums = [2,7,11,15], target = 9
Output: [0, 1]
```

#### Example 2
```
Input: nums = [7,3,5], target = 8
Output: [1,2]
```

#### Example 3
```
Input: nums = [5,5], target = 10
Output: [0,1]
```

#### Example 4
```
Input: nums = [], target = 2
Output: null
```

### Constraints
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

### Follow-up
Can you come up with an algorithm that is less than O(n2) time complexity?

## Solutions

### Solution 1: Brute Force

```javascript
var twoSum1 = (nums, target) => {
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
```
#### Complexity Analysis
- ***Time Complexity:*** `O(n^2)`
- ***Space Complexity:*** `O(1)`

### Solution 2: Using maps

```javascript
var twoSum2 = (nums, target) => {
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
```
#### Complexity Analysis
- ***Time Complexity:*** `O(n)`
- ***Space Complexity:*** `O(n)`

## Veify the Solution
Follow the below given steps to verify the solution.

### Pre Requisites
- node v14.x or v16.x

### Execution Steps
1. Navigate to `\JavaScript\Easy\Q1\` folder.
1. Run `npm install` or `npm i`
1. Run `npm test` to see similar output
```
> q1@1.0.0 test
> mocha

  Easy Q1: Two Sum
    twoSum1 - Brute Force
      ✔ should return [0,1] when the nums is [2,7,11,15] and target is 9
      ✔ should return [1,2] when the nums is [7,3,5] and target is 8
      ✔ should return [0,1] when the nums is [5, 5] and target is 10
      ✔ should return null when the nums is [] and target is 2
      ✔ should return null when the nums is [2] and target is 2
    twoSum2 - Using Maps
      ✔ should return [0,1] when the nums is [2,7,11,15] and target is 9
      ✔ should return [1,2] when the nums is [7,3,5] and target is 8
      ✔ should return [0,1] when the nums is [5, 5] and target is 10
      ✔ should return null when the nums is [] and target is 2
      ✔ should return null when the nums is [2] and target is 2


  10 passing (5ms)

```
