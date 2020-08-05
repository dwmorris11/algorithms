//moves zeroes to the end of the array in place

var moveZeroes = function(nums) {
  let counter = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0) {
          nums.splice(i, 1); //mutates the array, not ideal but within the constraint
          i--;
          counter++;
      }
  }
  for(let j = 0; j < counter; j++){
      nums.push(0);
  }
  return nums;
};