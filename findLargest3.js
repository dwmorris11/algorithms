function findThreeLargestNumbers(array) {
  let result = [array[0], array[1], array[2]];
	result.sort((a,b)=>a-b);
	console.log(result);
	for(let i = 3; i < array.length; i++){
		if(array[i] > result[2]){
			result.shift();
			result.push(array[i]);
		} else if (array[i] >= result[1]){
			result.shift();
			result.splice(1,0,array[i]);
		} else if (array[i] > result[0]){
			result.shift();
			result.unshift(array[i]);
		}
	}
	return result;
}