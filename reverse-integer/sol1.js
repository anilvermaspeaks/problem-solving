var reverse = function (x) {
  let processedNumber = 0;
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x = -x;
  }
  let extractedVal;
  while (x != 0) {
    extractedVal = x % 10;
    x = parseInt(x / 10);
    processedNumber = processedNumber * 10 + extractedVal;
  }
  if (processedNumber * sign > 2 ** 31 || processedNumber * sign < -(2 ** 31)) {
    return 0;
  }
  return processedNumber * sign;
};
