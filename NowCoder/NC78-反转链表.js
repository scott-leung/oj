// Link: https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca
const { ListNode, outputListNode, constructListNodeByArray } = require('../util');

function ReverseList(pHead) {
  let prev = null;
  let now = pHead;
  let next = pHead;
  while (now) {
    next = now.next;
    now.next = prev;
    prev = now;
    now = next;
  }
  return prev;
}

module.exports = {
  ReverseList: ReverseList
};

// For Test
(() => {
  const n1 = constructListNodeByArray([1, 2, 3]);
  outputListNode(n1);
  outputListNode(ReverseList(n1));
})()