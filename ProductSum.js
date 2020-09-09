function productSum(array, depth = 1) {
	let result = 0;
	for(const elem of array){
		let val = elem;
		if(Array.isArray(elem)){
			val = productSum(elem, depth+1);
		}
	  result += (depth * val);
	}
	return result;
}