# Longest Substring Without Repeating Characters

#### Table of Contents
- [Overview](#overview)
- [Problem Statement](#problem-statement)
    - [Example Testcases](#example-testcases)
        - [Example 1](#example-1)
        - [Example 2](#example-2)
        - [Example 3](#example-3)
        - [Example 4](#example-4)
    - [Constraints](#constraints)
- [Solutions](#solutions)
    - [Solution 1: Brute Force](#solution-1-brute-force)
        - [Complexity Analysis](#complexity-analysis)
    - [Solution 2: Simple Readable](#solution-2-simple-readable)
        - [Complexity Analysis](#complexity-analysis-1)
    - [Solution 3: Better Using Maps](#solution-2-better-using-maps)
        - [Complexity Analysis](#complexity-analysis-2)
- [Veify the Solution](#verify-the-solution)
    - [Pre Requisites](#pre-requisites)
    - [Execution Steps](#execution-steps)

## Overview

- **Difficulty:** :orange_circle: ***Medium***
- **Solution:** JavaScript
- **Companies:** Facebook, Amazon, Microsoft, Oracle, LinkedIn, Airbnb
- **Source:** ***[Click Here](https://leetcode.com/problems/add-two-numbers/)***


## Problem Statement

Given a string `s`, find the length of the ***longest substring*** without repeating characters.

For instance, in Example 1 `[2,4,3]` and `[5,6,4]` is the given reverse order linked lists. If we parse this as a number and sum it, the return result would be `708 i.e. 342 + 465 = 807`. So the algorithm should calculate the sum and return the result as a linked list `[7, 0, 8]`. 

### Example Testcases

#### Example 1
```
Input: s = "abcabcbb"
Output: 3
```

#### Example 2
```
Input: s = "bbbbb"
Output: 1
```

#### Example 3
```
Input: s = "pwwkew"
Output: 3
```

#### Example 4
```
Input: s = ""
Output: 0
```

### Constraints
- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces.

## Solutions

### Solution 1: Brute Force

```javascript
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
```
#### Complexity Analysis
- ***Time Complexity:*** `O(n^2)`
- ***Space Complexity:*** `O(n)`

### Solution 2: Simple and Readable

```javascript
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
```
#### Complexity Analysis
- ***Time Complexity:*** `O(n)`
- ***Space Complexity:*** `O(n)`

### Solution 3: Better Using Maps

```javascript
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
```
#### Complexity Analysis
- ***Time Complexity:*** `O(max(m,n))`
- ***Space Complexity:*** `O(max(m,n))`

## Verify the Solution
Follow the below given steps to verify the solution.

### Pre Requisites
- node v14.x or v16.x

### Execution Steps
1. Navigate to `\JavaScript\Medium\Q1\` folder.
1. Run `npm install` or `npm i`
1. Run `npm test` to see similar output
```
> q1@1.0.0 test
> mocha

  Medium Q2: Longest Substring Without Repeating Characters
    lengthOfLongestSubstring1 - Using inner for loops
      ✔ should return 3 when the input string is abcabcbb
      ✔ should return 1 when the input string is bbbbb
      ✔ should return 3 when the input string is pwwkew
      ✔ should return 2 when the input string is abba
      ✔ should return 0 when the input string is null/emapty
    lengthOfLongestSubstring2 - Keep tracking the substring
      ✔ should return 3 when the input string is abcabcbb
      ✔ should return 1 when the input string is bbbbb
      ✔ should return 3 when the input string is pwwkew
      ✔ should return 2 when the input string is abba
      ✔ should return 0 when the input string is null/emapty
    lengthOfLongestSubstring3 - Using maps
      ✔ should return 3 when the input string is abcabcbb
      ✔ should return 1 when the input string is bbbbb
      ✔ should return 3 when the input string is pwwkew
      ✔ should return 2 when the input string is abba
      ✔ should return 0 when the input string is null/emapty

  15 passing (11ms)

```
