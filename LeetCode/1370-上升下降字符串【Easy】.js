// 题目链接：https://leetcode-cn.com/problems/increasing-decreasing-string/

function takeMin(hash) {
    let s = '';
    for (let key in hash) {
        s += key;
        hash[key] -= 1;
        if (hash[key] <= 0) {
            delete hash[key];
        }
    }
    return s;
}

function takeMax(hash) {
    let s = '';
    for (let key in hash) {
        s = key + s;
        hash[key] -= 1;
        if (hash[key] <= 0) {
            delete hash[key];
        }
    }
    return s;
}

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = s.split('');
    arr.sort((a, b) => a.localeCompare(b));

    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] + 1 || 1;
    }
    let ret = '';
    while(Object.keys(hash).length > 0) {
        ret += takeMin(hash);
        ret += takeMax(hash);
    }
    return ret;
};
