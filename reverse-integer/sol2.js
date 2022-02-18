var reverse = function (x) {
  let processedNumber = 0;
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = -x;
  }

  processedNumber = x.toString().split("").reverse().join("");
  if (processedNumber * sign > 2 ** 31 || processedNumber * sign < -(2 ** 31)) {
    return 0;
  }

  return processedNumber * sign;
};
