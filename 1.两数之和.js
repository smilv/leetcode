/*
 * @Description:
 * @Autor: bin
 * @Date: 2021-05-23 23:24:57
 * @LastEditors: bin
 * @LastEditTime: 2021-05-24 10:51:27
 */

/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        let k = nums.lastIndexOf(difference);
        if (k > -1 && k != i) {
            return [i, k];
        }
    }
};

/* 解题思路:
哈希表
我们遍历到数字 a 时，用 target 减去 a，就会得到 b，
若 b 存在于哈希表中，我们就可以直接返回结果了。若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用。 
*/

var twoSum = function(nums, target) {
    const hash = new Map();
    hash.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        let difference = target - nums[i];
        if (hash.has(difference)) {
            return [i, hash.get(difference)];
        } else {
            has.set(nums[i], i);
        }
    }
};
