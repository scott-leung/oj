function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function constructTreeByArray(arr) {
  let root = null;
  let deep = 0;
  let queue = [];
  while (arr.length) {
    const count = queue.length * 2 || 1;
    const layer = arr.splice(0, count);
    // console.log('layer:', layer);
    if (!root) {
      root = new TreeNode(layer.shift());
      queue.push(root);
      continue;
    }
    while (layer.length) {
      const node = queue.shift();
      const left = layer.shift() || null;
      const right = layer.shift() || null;
      if (node) {
        if (left !== null) {
          node.left = new TreeNode(left);
          queue.push(node.left);
        }
        if (right !== null) {
          node.right = new TreeNode(right);
          queue.push(node.right);
        }
      }
    }
  }
  return root;
}

function outputTreeNode(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let tempArr = queue;
    queue = [];
    let line = '';
    let last = true;
    while (tempArr.length) {
      const node = tempArr.shift();
      line += (node && node.val) + '  ';
      if (node) {
        queue.push(node.left, node.right);
        if (node.left || node.right) last = false;
      }
    }
    console.log(line);
    if (last) queue = [];
  }
}

// const node = constructTreeByArray([3, 9, 20, null, null, 15, 7, 1, 2, 3, 4, null, 5, null, 6, 7]);
// outputTreeNode(node);

module.exports = {
  TreeNode,
  constructTreeByArray
};