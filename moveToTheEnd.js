function moveElementToEnd(array, toMove) {
	let counter = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] === toMove){
			counter++;
			array.splice(i, 1);
			i--;
		}
	}
	for(let j = 0; j < counter; j++){
		array.push(toMove);
	}
	 return array;
}