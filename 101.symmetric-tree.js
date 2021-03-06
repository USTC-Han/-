/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (43.67%)
 * Total Accepted:    422.9K
 * Total Submissions: 966K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3] is not:
 * 
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isisSymmetricPlus = function(rootLeft ,rootRight){
  if(rootLeft === null && rootLeft === null) return true;
  if(rootLeft === null || rootLeft === null) return false;
  if(rootLeft.val !== rootRight.val) return false;
  return isisSymmetricPlus(rootLeft.left, rootRight.right) && isisSymmetricPlus(rootLeft.right, rootRight.left)
}

var isSymmetric = function(root) {
    if(root === null) return true;
    var rootLeft = root.left;
    var rootRight = root.right
    return isisSymmetricPlus(rootLeft,rootRight);
};
