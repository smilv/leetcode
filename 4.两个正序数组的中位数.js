/*
 * @Description: 中位数
 * @Author: zhaobin
 * @Date: 2023-11-15 14:28:54
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-15 18:17:15
 */

/*
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

示例：
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr=[];
  

};

function mergeSort(arr) {
  // 序列长度为1时退出
  if (arr.length < 2 ) {
      return arr
  }

  // 将序列分为两个子序列，这一块起到“分治法”中的“分割”
  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  
  // 递归，这一块起到“分治法”中的“集成”
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = []
  
  // 两个子序列进行比较，从小到大放入新的序列result中
  while(left.length > 0 && right.length > 0) {
      // 将较小的放入result,并改变left或者right的长度，灵活使用shift方法
      if (left[0] < right[0]) {
          result.push(left.shift())
      } else {
          result.push(right.shift())
      }
  }
  
  // 先将小的元素放入result中，直到left或者right为空，剩余的一个数组肯定是大于result的有序序列，所以直接通过concat进行合并返回
  return result.concat(left, right)
}

// 测试
const arr = [12, 2 , 13, 23, 4, 45]
mergeSort(arr) // [2, 4, 12, 13, 23, 45]