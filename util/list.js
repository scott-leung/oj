function ListNode(val) {
  this.val = val;
  this.next = null;
}

function outputListNode(node) {
  if (!(node instanceof ListNode)) {
    throw TypeError('node is not instanceof ListNode');
  }
  let wkSet = new WeakSet();
  console.log(`Output ListNode Result:`);
  let outStr = '';
  while (node) {
    if (wkSet.has(node)) {
      outStr += `[Circular Node] => ${node.val}`;
      break;
    }
    outStr += node.val;
    if (node.next) outStr += ' => ';
    node = node.next;
  }
  console.log(outStr + '\n');
}

function constructListNodeByArray(arr) {
  if (!Array.isArray(arr)) throw TypeError(`arr must be an array.`);

  let head = null;
  let len = arr.length;
  while(len--) {
    let node = new ListNode(arr[len]);
    node.next = head;
    head = node;
  }
  return head;
}

module.exports = {
  ListNode,
  outputListNode,
  constructListNodeByArray,
}