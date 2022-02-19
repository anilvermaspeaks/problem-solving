/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const str = x.toString();

  let rev = "";
  for (let char of str) {
    rev = char + rev;
  }

  return str === rev;
};
