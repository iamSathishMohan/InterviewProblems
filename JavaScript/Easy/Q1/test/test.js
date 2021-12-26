const assert = require("assert");
const { twoSum1, twoSum2 } = require("../src/index.js");

describe("Easy Q1: Two Sum", function () {
  describe("twoSum1 - Brute Force", function () {
    it("should return [0,1] when the nums is [2,7,11,15] and target is 9", function () {
      assert.deepEqual(twoSum1([2, 7, 11, 15], 9), [0, 1]);
    });

    it("should return [1,2] when the nums is [7,3,5] and target is 8", function () {
      assert.deepEqual(twoSum1([7, 3, 5], 8), [1, 2]);
    });

    it("should return [0,1] when the nums is [5, 5] and target is 10", function () {
      assert.deepEqual(twoSum1([5, 5], 10), [0, 1]);
    });

    it("should return null when the nums is [] and target is 2", function () {
      assert.deepEqual(twoSum1([], 2), null);
    });

    it("should return null when the nums is [2] and target is 2", function () {
      assert.deepEqual(twoSum1([2], 2), null);
    });
  });

  describe("twoSum2 - Using Maps", function () {
    it("should return [0,1] when the nums is [2,7,11,15] and target is 9", function () {
      assert.deepEqual(twoSum2([2, 7, 11, 15], 9), [0, 1]);
    });

    it("should return [1,2] when the nums is [7,3,5] and target is 8", function () {
      assert.deepEqual(twoSum2([7, 3, 5], 8), [1, 2]);
    });

    it("should return [0,1] when the nums is [5, 5] and target is 10", function () {
      assert.deepEqual(twoSum2([5, 5], 10), [0, 1]);
    });

    it("should return null when the nums is [] and target is 2", function () {
      assert.deepEqual(twoSum2([], 2), null);
    });

    it("should return null when the nums is [2] and target is 2", function () {
      assert.deepEqual(twoSum2([2], 2), null);
    });
  });
});
