function binarySearch(array, target) {
	return bSearchHelper(array, target, 0, array.length -1)
}

function bSearchHelper(array, target, left, right){
  while(left<=right){
		const middle = Math.floor((left+right)/2);
		const match = array[middle];
		if(target === match){
			return middle;
		} else if(target < match){
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
}