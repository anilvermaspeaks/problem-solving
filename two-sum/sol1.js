var twoSum = function (nums, target) {
  let temMap = {};
  if (nums?.length < 2) {
    return null;
  }

  for (let i = 0; i < nums.length; i++) {
    const index = target - nums[i];

    if (temMap[index] !=null ) {
    return [temMap[index],i]
    }

    if (!temMap[nums[i]]) {
      temMap[nums[i]] = i;
    }
  }
  return null;
};
