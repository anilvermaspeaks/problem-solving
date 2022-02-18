var trap = function (height) {
  if (height.length < 2) {
    return 0;
  }
  let maxLA = [];
  let maxRA = [];
  maxLA[0] = height[0];
  maxRA[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    maxLA[i] = Math.max(maxLA[i - 1], height[i]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    maxRA[i] = Math.max(maxRA[i + 1], height[i]);
  }

  let water = [];

  for (let i = 0; i < height.length; i++) {
    water[i] = Math.min(maxRA[i], maxLA[i]) - height[i];
  }
  return water.reduce((acc, num) => acc + num, 0);
};
