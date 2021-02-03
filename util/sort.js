function dichotomyFind(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) / 2 | 0);
    if (arr[mid] > val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  add(val) { // 添加, 用二分查找 找到要插入的位置
    let idx = dichotomyFind(this.queue, val);
    this.queue.splice(idx, 0, val);
  }
  del(val) { // 删除
    let idx = dichotomyFind(this.queue, val);
    this.queue.splice(idx, 1);
  }
  getMid(isOdd) {
    let mid = this.queue.length / 2 | 0;
    return isOdd ? this.queue[mid] : (this.queue[mid - 1] + this.queue[mid]) / 2;
  }
}

module.exports = {
  dichotomyFind,
  PriorityQueue,
};
