
//twoSum naive solution time=O(n^2), space=O(1)
var twoSum = function(nums, target) {
    let sum = [];
    nums.forEach((num, i) => {
        nums.forEach((n,j)=> {
            if((n + num) === target && i != j){
                if(sum.includes(i) || sum.includes(j))
                {  }
                else {
                sum.push(i);
                sum.push(j);
                }
            }
        });
    });
    return sum;
};

//store values in a hash table
var twoSumFaster = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]>=0){
            return [hash[nums[i]], i];
        }else {
            hash[target-nums[i]] = i;
        }
    }
}

console.log(twoSum([-1,-2,-3,-4,-5],-8));
console.log(twoSumFaster([-1,-2,-3,-4,-5],-9));