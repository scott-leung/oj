// 题目链接：https://leetcode-cn.com/problems/check-if-it-is-a-straight-line/

// 思路：套用两点一线公式 (x3-x1)*(y2-y1) = (y3-y1) * (x2-x1)
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const a = (y2 - y1);
  const b = (x2 - x1);
  for (let i = 3; i < coordinates.length; i++) {
    const [x3, y3] = coordinates[i];
    if ((x3 - x1) * a !== (y3 - y1) * b) return false;
  }

  return true;
};

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]));
