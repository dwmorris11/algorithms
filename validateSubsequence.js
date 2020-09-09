function isValidSubsequence(array, sequence) {
  //iterate through each item in the sequence
	//iterate through each item in the array
	//short circuit sequence > array
	if(sequence.length > array.length){
		return false;
	}
	var i = -1;
	for(let j = 0; j < sequence.length; j++){
		if(i+2 > array.length){ return false;}
		for( i = i + 1; i < array.length; i++){
			if(sequence[j] === array[i]){
				break;
			} else if (i === array.length - 1){
				return false;
			}
		}
	}
	return true;
}
