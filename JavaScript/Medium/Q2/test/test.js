import { equal } from 'assert';
import {
    lengthOfLongestSubstring1,
    lengthOfLongestSubstring2,
    lengthOfLongestSubstring3,
} from '../src/index.js';

describe('Medium Q2: Longest Substring Without Repeating Characters', function () {
    describe('lengthOfLongestSubstring1 - Using inner for loops', function () {
        it('should return 3 when the input string is abcabcbb', function () {
            equal(lengthOfLongestSubstring1('abcabcbb'), 3);
        });

        it('should return 1 when the input string is bbbbb', function () {
            equal(lengthOfLongestSubstring1('bbbbb'), 1);
        });

        it('should return 3 when the input string is pwwkew', function () {
            equal(lengthOfLongestSubstring1('pwwkew'), 3);
        });

        it('should return 2 when the input string is abba', function () {
            equal(lengthOfLongestSubstring1('abba'), 2);
        });

        it('should return 0 when the input string is null/emapty', function () {
            equal(lengthOfLongestSubstring1(''), 0);
        });
    });

    describe('lengthOfLongestSubstring2 - Keep tracking the substring', function () {
        it('should return 3 when the input string is abcabcbb', function () {
            equal(lengthOfLongestSubstring2('abcabcbb'), 3);
        });

        it('should return 1 when the input string is bbbbb', function () {
            equal(lengthOfLongestSubstring2('bbbbb'), 1);
        });

        it('should return 3 when the input string is pwwkew', function () {
            equal(lengthOfLongestSubstring2('pwwkew'), 3);
        });

        it('should return 2 when the input string is abba', function () {
            equal(lengthOfLongestSubstring2('abba'), 2);
        });

        it('should return 0 when the input string is null/emapty', function () {
            equal(lengthOfLongestSubstring2(''), 0);
        });
    });

    describe('lengthOfLongestSubstring3 - Using maps', function () {
        it('should return 3 when the input string is abcabcbb', function () {
            equal(lengthOfLongestSubstring3('abcabcbb'), 3);
        });

        it('should return 1 when the input string is bbbbb', function () {
            equal(lengthOfLongestSubstring3('bbbbb'), 1);
        });

        it('should return 3 when the input string is pwwkew', function () {
            equal(lengthOfLongestSubstring3('pwwkew'), 3);
        });

        it('should return 2 when the input string is abba', function () {
            equal(lengthOfLongestSubstring3('abba'), 2);
        });

        it('should return 0 when the input string is null/emapty', function () {
            equal(lengthOfLongestSubstring3(''), 0);
        });
    });
});
