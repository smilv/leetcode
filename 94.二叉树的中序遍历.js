/**
 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。


 示例 1：


  输入：root = [1,null,2,3]
  输出：[1,3,2]
  示例 2：

  输入：root = []
  输出：[]
  示例 3：

  输入：root = [1]
  输出：[1]

 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node = new TreeNode();

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // let res=[],
  // val=res.val;
  // if(root.left){
  //     res.push(inorderTraversal(root.left))
  // }
  // res.push(root.val)
  // if(root.right){
  //     res.push(inorderTraversal(root.right))
  // }
  // return res;
};

console.log(inorderTraversal(node));
