// 题目链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

const { TreeNode, constructTreeByArray } = require('../util');

// 思路：每一层遍历不变的前提下，找一个数组存当前层遍历结果
// 然后根据奇偶性，选择翻转再插入结果集即可

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let tempArr = queue;
    queue = [];
    let tempRes = [];
    while (tempArr.length) {
      const node = tempArr.shift();
      if (node) {
        tempRes.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    if (res.length % 2 === 1) {
       tempRes = tempRes.reverse();
    }
    res.push(tempRes);
  }
  return res;
};

console.log(zigzagLevelOrder(constructTreeByArray([3,9,20,null,null,15,7])));