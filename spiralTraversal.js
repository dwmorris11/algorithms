function spiralTraverse(array) {
	let result = [];
	let startRow = 0,
			endRow = array.length - 1,
			startCol = 0,
			endCol = array[0].length - 1;
	while(startRow <= endRow && startCol <= endCol){
		//top perimeter
		for(let col = startCol; col <= endCol; col++){
			result.push(array[startRow][col]);
		}
		//right perimeter
		for(let row = startRow + 1; row <= endRow; row++){
			result.push(array[row][endCol]);
		}
		//bottom perimeter
		for(let col = endCol - 1; col >= startCol; col--){
			if(startRow === endRow) break;
			result.push(array[endRow][col]);
		}
		//left perimeter
		for(let row = endRow - 1; row > startRow; row--){
			if(startCol === endCol) break;
			result.push(array[row][startCol]);
		}
		startRow++;
		startCol++;
		endRow--;
		endCol--;
	}
	return result;
}
