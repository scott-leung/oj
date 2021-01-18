// 题目链接：https://leetcode-cn.com/problems/accounts-merge/

/**
 * 获取 Symbol 的名称
 * @param {Symbol} symb 
 */
function getSymbalName(symb) {
  const s = symb.toString();
  return s.slice(7, s.length - 1);
}

/**
 * sort string min 2 max
 * @param {string} a strA
 * @param {string} b strB
 */
function strMin2Max(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a.charCodeAt(i) == b.charCodeAt(i)) continue;
    return a.charCodeAt(i) - b.charCodeAt(i);
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let mail2Name = {};
  let name2Mail = {};
  for (let i = 0; i < accounts.length; i++) {
    const name = accounts[i][0];
    let nameSymbol = Symbol(name);
    name2Mail[nameSymbol] = new Set();
    for (let j = 1; j < accounts[i].length; j++) {
      const mail = accounts[i][j];
      // 如果该邮箱之前已经存在过，并且没有替换过，那么合并
      if (mail2Name[mail] && mail2Name[mail] !== nameSymbol) {
        let newNameSymbol = mail2Name[mail];
        // 合并时其实就是把之前的邮箱的 symbol 替换一下
        name2Mail[nameSymbol].forEach(befMail => {
          mail2Name[befMail] = newNameSymbol;
          name2Mail[newNameSymbol].add(befMail);
        });
        // 往后，都用之前的 symbol
        delete name2Mail[nameSymbol];
        nameSymbol = newNameSymbol;
      }
      mail2Name[mail] = nameSymbol;
      name2Mail[nameSymbol].add(mail);
    }
  }
  let res = [];
  // 对于 symbol，需要用 ES6 的 Reflect.ownKeys 来遍历
  for (let key of Reflect.ownKeys(name2Mail)) {
    // 导出前，需要把结果按字典序排序
    res.push([getSymbalName(key), ...[...name2Mail[key]].sort(strMin2Max)]);
  }
  return res;
};

console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]));
