/*

*/
var rob = function(nums) {
  let prev1 = 0;
  let prev2 = 0;
  let temp;
  for(let i = 0; i < nums.length; i++){
    temp = prev1;
    prev1 = Math.max(prev2 + nums[i], prev1);
    prev2 = temp;
  }

  return prev1;
}

console.log(rob([1,2,3,1])); //4
console.log(rob([2,7,9,3,1])); //12
console.log(rob([0])); //0
console.log(rob([5])); //5
console.log(rob([])); //0
console.log(rob([1,1,1,1,1,2,2,2,2,2])); //8
console.log(rob([2,1,1,2])) //4