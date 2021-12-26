# Add Two Numbers

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
    - [Solution 1: Simple Readable](#solution-1-simple-readable)
        - [Complexity Analysis](#complexity-analysis)
    - [Solution 2: Concise Recursive](#solution-2-concise-recursive)
        - [Complexity Analysis](#complexity-analysis-1)
- [Veify the Solution](#verify-the-solution)
    - [Pre Requisites](#pre-requisites)
    - [Execution Steps](#execution-steps)

## Overview

- **Difficulty:** :orange_circle: ***Medium***
- **Solution:** JavaScript
- **Companies:** Facebook, Amazon, Microsoft, Oracle, LinkedIn, Airbnb
- **Source:** ***[Click Here](https://leetcode.com/problems/add-two-numbers/)***


## Problem Statement

You are given two *non-empty* linked lists representing two non-negative integers. The digits are stored in *reverse order*, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

For instance, in Example 1 `[2,4,3]` and `[5,6,4]` is the given reverse order linked lists. If we parse this as a number and sum it, the return result would be `708 i.e. 342 + 465 = 807`. So the algorithm should calculate the sum and return the result as a linked list `[7, 0, 8]`. 

### Example Testcases

#### Example 1
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
```

#### Example 2
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

#### Example 3
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

#### Example 4
```
Input: l1 = [], l2 = []
Output: null
```

### Constraints
- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.value <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

### Follow-up
What if the the digits in the linked list are stored in non-reversed order? For example: (3→4→2)+(4→6→5)=8→0→7

## Solutions

### Solution 1: Simple Readable

```javascript
var addTwoNumbers1 = (l1, l2) => {
    if (l1 === null && l2 == null) {
        return null;
    } else if (l1 == null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }

    var head = new LinkedListNode(0);
    var current = head;
    var sum = 0;
    var carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.value;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.value;
            l2 = l2.next;
        }

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        current.next = new LinkedListNode(sum);
        current = current.next;

        sum = carry;
        carry = 0;
    }

    return head.next;
};
```
#### Complexity Analysis
- ***Time Complexity:*** `O(max(m,n))`
- ***Space Complexity:*** `O(max(m,n))`

### Solution 2: Concise Recursive

```javascript
var addTwoNumbers2 = (l1, l2, carry = 0) => {
    if (l1 === null && l2 === null) {
        return carry === 0 ? null : new LinkedListNode(carry);
    }

    const sum = (l1?.value || 0) + (l2?.value || 0) + carry;
    return new LinkedListNode(
        sum % 10,
        addTwoNumbers2(l1?.next || null, l2?.next || null, (sum / 10) >> 0)
    );
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

  Medium Q1: Add Two Numbers
    addTwoNumbers1 - Using while loop
      ✔ should return [7,0,8] when the list1 is [2,4,3] and list2 is [5,6,4]
      ✔ should return [0] when the list1 is [0] and list2 is [0]
      ✔ should return [8,9,9,9,0,0,0,1] when the list1 is [9,9,9,9,9,9,9] and list2 is [9,9,9,9]
      ✔ should return null when both the input list1 and list2 is null
      ✔ should return [2,3] when the list1 is [2,3] and list2 is null
    addTwoNumbers2 - Using recursion
      ✔ should return [7,0,8] when the list1 is [2,4,3] and list2 is [5,6,4]
      ✔ should return [0] when the list1 is [0] and list2 is [0]
      ✔ should return [8,9,9,9,0,0,0,1] when the list1 is [9,9,9,9,9,9,9] and list2 is [9,9,9,9]
      ✔ should return null when both the input list1 and list2 is null
      ✔ should return [2,3] when the list1 is [2,3] and list2 is null


  10 passing (11ms)

```
