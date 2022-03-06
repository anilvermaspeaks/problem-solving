/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let tempMap = {};
  for (let i = 0; i < s.length; i++) {
    if (tempMap[s[i]] && tempMap[s[i]] !== t[i]) {
      return false;
    } else if (!tempMap[s[i]] && Object.values(tempMap).includes(t[i])) {
      return false;
    } else {
      tempMap[s[i]] = t[i];
    }
  }
  return true;
};
