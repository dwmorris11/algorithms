function kadanesAlgorithm(array) {
  let max = array[0];
	let maxSoFar = array[0];
	array.forEach((value, i)=>{
		if(i !== 0){
			max = Math.max(value, max+value);
			maxSoFar = Math.max(maxSoFar, max);
		}
	});

	return maxSoFar;
}