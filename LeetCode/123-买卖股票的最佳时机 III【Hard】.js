// 题目链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
// 相似题目：188，714

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const k = 2;
  // 边界
  if (!prices.length || !k) return 0;

  const dayCount = prices.length;
  const tradeCount = Math.min(k, ~~(dayCount / 2));
  let buy = new Array(dayCount).fill(0).map(v => new Array(tradeCount + 1).fill(0));
  let sale = new Array(dayCount).fill(0).map(v => new Array(tradeCount + 1).fill(0));
  // 初始值设置
  buy[0][0] = -prices[0];
  for (let i = 1; i <= tradeCount; i++) {
    buy[0][i] = sale[0][i] = -Number.MAX_SAFE_INTEGER;
  }

  for (let day = 1; day < dayCount; day++) {
    buy[day][0] = Math.max(buy[day - 1][0], sale[day - 1][0] - prices[day]);
    for (let saleCount = 1; saleCount <= tradeCount; saleCount++) {
      buy[day][saleCount] = Math.max(buy[day - 1][saleCount], sale[day - 1][saleCount] - prices[day]);
      sale[day][saleCount] = Math.max(sale[day - 1][saleCount], buy[day - 1][saleCount - 1] + prices[day]);
    }
  }

  return Math.max(...sale[dayCount - 1]);
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1]));
