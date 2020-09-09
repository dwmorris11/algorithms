/*  Sorting the array first allows the use of 3 pointers.
Current, Left, and Right
*/

function threeNumberSum(array, targetSum) {
  array.sort((a,b)=>a-b);
	let result = [];
	for(let i = 0; i < array.length - 2; i++){
		let left = i + 1;
		let right = array.length - 1;
		while(left < right){
			const currentSum = updateSum(array,i,left,right);
			if(currentSum === targetSum){
			  result.push([array[i], array[left], array[right]]);
			  left++
			  right--;
	    }else if(currentSum < targetSum){
				left++;
			}else if(currentSum > targetSum){
				right--;
			}
		}
	}
	return result;
}
function updateSum(array, i, left, right){
	let sum = array[i] + array[left] + array[right];
	return sum;
}