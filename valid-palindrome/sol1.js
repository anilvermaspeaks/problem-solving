/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let rev = "";
  const str = s.toLowerCase().replace(/[\W_]/g, "");
  for (let char of str) {
    rev = char + rev;
  }

  return str === rev;
};
