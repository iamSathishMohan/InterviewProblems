import { deepEqual } from 'assert';
import { addTwoNumbers1, addTwoNumbers2 } from '../src/index.js';
import { LinkedListNode } from '../src/linkedlist-node.js';

function getLinkedList(arr) {
    var head = new LinkedListNode(0);
    var current = head;
    arr.forEach((element) => {
        current.next = new LinkedListNode(element);
        current = current.next;
    });

    return head.next;
}

describe('Medium Q1: Add Two Numbers', function () {
    describe('addTwoNumbers1 - Using while loop', function () {
        it('should return [7,0,8] when the list1 is [2,4,3] and list2 is [5,6,4]', function () {
            deepEqual(
                addTwoNumbers1(
                    getLinkedList([2, 4, 3]),
                    getLinkedList([5, 6, 4])
                ),
                getLinkedList([7, 0, 8])
            );
        });

        it('should return [0] when the list1 is [0] and list2 is [0]', function () {
            deepEqual(
                addTwoNumbers1(getLinkedList([0]), getLinkedList([0])),
                getLinkedList([0])
            );
        });

        it('should return [8,9,9,9,0,0,0,1] when the list1 is [9,9,9,9,9,9,9] and list2 is [9,9,9,9]', function () {
            deepEqual(
                addTwoNumbers1(
                    getLinkedList([9, 9, 9, 9, 9, 9, 9]),
                    getLinkedList([9, 9, 9, 9])
                ),
                getLinkedList([8, 9, 9, 9, 0, 0, 0, 1])
            );
        });

        it('should return null when both the input list1 and list2 is null', function () {
            deepEqual(addTwoNumbers1(null, null), null);
        });

        it('should return [2,3] when the list1 is [2,3] and list2 is null', function () {
            deepEqual(
                addTwoNumbers1(null, getLinkedList([2, 3])),
                getLinkedList([2, 3])
            );
        });
    });

    describe('addTwoNumbers2 - Using recursion', function () {
        it('should return [7,0,8] when the list1 is [2,4,3] and list2 is [5,6,4]', function () {
            deepEqual(
                addTwoNumbers2(
                    getLinkedList([2, 4, 3]),
                    getLinkedList([5, 6, 4])
                ),
                getLinkedList([7, 0, 8])
            );
        });

        it('should return [0] when the list1 is [0] and list2 is [0]', function () {
            deepEqual(
                addTwoNumbers2(getLinkedList([0]), getLinkedList([0])),
                getLinkedList([0])
            );
        });

        it('should return [8,9,9,9,0,0,0,1] when the list1 is [9,9,9,9,9,9,9] and list2 is [9,9,9,9]', function () {
            deepEqual(
                addTwoNumbers2(
                    getLinkedList([9, 9, 9, 9, 9, 9, 9]),
                    getLinkedList([9, 9, 9, 9])
                ),
                getLinkedList([8, 9, 9, 9, 0, 0, 0, 1])
            );
        });

        it('should return null when both the input list1 and list2 is null', function () {
            deepEqual(addTwoNumbers2(null, null), null);
        });

        it('should return [2,3] when the list1 is [2,3] and list2 is null', function () {
            deepEqual(
                addTwoNumbers2(null, getLinkedList([2, 3])),
                getLinkedList([2, 3])
            );
        });
    });
});
