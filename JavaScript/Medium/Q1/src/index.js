import { LinkedListNode } from './linkedlist-node.js';

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/**
 * @description The simple and readable solution is to use loops and generate sum node
 * @param {LinkedListNode} l1 first linked list node
 * @param {LinkedListNode} l2 second linked list node
 * @return {LinkedListNode} result linked list node
 */
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

/**
 * @description The simple and readable solution is to use loops and generate sum node
 * @param {LinkedListNode} l1 first linked list node
 * @param {LinkedListNode} l2 second linked list node
 * @param {Number} carry the carry over value. default is 0
 * @return {LinkedListNode} result linked list node
 */
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

export { addTwoNumbers1, addTwoNumbers2 };
