const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;

      if (i === 0 || nums[i] !== nums[i-1]) {
          let left = i + 1;
          let right = nums.length - 1;

          while (left < right) {
              let sum = nums[i] + nums[left] + nums[right];

              if (sum < 0) left++;
              else if (sum > 0) right--;
              else {
                  triplets.push([nums[i], nums[left], nums[right]]);
                  left++;
                  right--;

                  while (left < right && nums[left] === nums[left - 1]) left++;
              }
          }
      }
  }
  return triplets;
};