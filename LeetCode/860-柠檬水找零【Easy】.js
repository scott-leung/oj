// 题目链接：https://leetcode-cn.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let money = {
    5: 0,
    10: 0,
    count: 0
  };
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    // 应当找零数量
    let charge = bill - 5;
    // 钱包里的钱加起来都不够找零
    if (charge > money.count) return false;
    // 只存10块5块的零钱数量
    if (bill < 20) {
      money[bill]++;
      money.count += bill;
    }
    // 无论是给20块还是给10块，都要5块钱
    if (charge === 15) {
      if (money[5] < 1) return false;
      if (money[10] > 0) {
        money[10]--;
        money[5]--;
      } else {
        money[5] -= 3;
      }
    }
    if (charge === 5) {
      if (money[5] < 1) return false;
      money[5]--;
    }
    // 钱找给人家了，那么总量相应减少
    money.count -= charge;
  }
  return true;
};