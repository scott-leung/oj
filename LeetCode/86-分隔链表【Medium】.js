// 题目链接：https://leetcode-cn.com/problems/partition-list/

const { ListNode, constructListNodeByArray, outputListNode } = require('../util');

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const gte = new ListNode(-1);
  const lt = new ListNode(-1);

  let gteNow = gte;
  let ltNow = lt;

  while (head) {
    if (head.val < x) {
      ltNow = ltNow.next = head;
    } else {
      gteNow = gteNow.next = head;
    }
    head = head.next;
  }

  gteNow.next = null;
  ltNow.next = gte.next;

  return lt.next;
};

console.log(outputListNode(partition(constructListNodeByArray([1,4,3,2,5,2]), 3)));
