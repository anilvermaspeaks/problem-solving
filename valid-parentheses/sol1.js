/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let isValid = false;
  if (s.length === 1 || s.length % 2 !== 0) {
    return false;
  }
  let count = 0;
  for (let c of s) {
    count = count + 1;
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      isValid = false;
    } else {
      if (count === s.length && stack.length > 1) {
        return false;
      }
      let popedItem = stack.pop();
      if (
        (popedItem === "(" && c === ")") ||
        (popedItem === "{" && c === "}") ||
        (popedItem === "[" && c === "]")
      ) {
        isValid = true;
      } else {
        return false;
      }
    }
  }
  return isValid;
};
