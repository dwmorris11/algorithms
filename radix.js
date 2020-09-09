/*
Only works on numbers
Never compares elements
Information about the size of the number
is encoded in the number of digits
*/
// getDigit Helper
function getDigit(num, place){
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
// how many digits are in a number
function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// what is the maximum digits in a number in an array
function maxDigits(nums){
  let maxDigit = 0;
  for(let i = 0; i < nums.length; i++){
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

function rSort(nums){
  let max = maxDigits(nums);
  for(let i = 0; i < max; i++){
    let buckets = Array.from({length: 10}, () => []);
    for(let k = 0; k < nums.length; k++){
      let digit = getDigit(nums[k], i);
      buckets[digit].push(nums[k]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(rSort([90,1238,17,6,605,1111114,333,12,1]));
console.log(rSort([9,8,7,6,1,2,3,4]));
console.log(rSort([-9,-8,-7,-6,-5,-4,-3,-2,-1]));  //breaks
console.log(rSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(rSort([1, 2, 3, 4, 10, 5, 6, 7, 8, 9]));