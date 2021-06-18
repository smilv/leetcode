/*
 * @Description: 两数相加
 * @Autor: zhaobin <zhaobin@googutspirits.com>
 * @Date: 2021-06-18 10:24:12
 * @LastEditors: zhaobin
 * @LastEditTime: 2021-06-18 16:54:56
 */

/* 
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

0 <= Node.val <= 9

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const l1 = [9,9];
const l2 = [1];
/*
    思路：
    两个链表从左到右依次相加，用和取余数添加到结果中
    如果大于10，进位1
    如果两个链表length不同，用0补齐
*/

/**
 * @description 链表格式
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (head == null) {
            tail = new ListNode(sum % 10);
            head = tail;
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry != 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};