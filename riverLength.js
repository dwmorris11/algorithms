function riverSizes(matrix) {
	const visited = matrix.map(row => row.map(value => false));
	const sizes = [];
	for(let row = 0; row < matrix.length; row++){
		for(let col = 0; col < matrix[row].length; col++){
			if(!visited[row][col]){
				search(row,col,matrix,visited,sizes);
			}
		}
	}
	return sizes;
}

	function search(row,col, matrix, visited, sizes) {
		let currentRiverSize = 0;
		const nodesToExplore = [[row,col]];
		while(nodesToExplore.length) {
			const currentNode = nodesToExplore.pop();
			row = currentNode[0];
			col = currentNode[1];
			if(visited[row][col]) continue;
			visited[row][col] = true;
			if(!matrix[row][col]) continue;
			currentRiverSize++;
			const unvisitedNeighbors = getUnvisitedNeighbors(row, col, matrix, visited);
			for(const neighbor of unvisitedNeighbors) {
				nodesToExplore.push(neighbor);
			}
		}
		if(currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(row, col, matrix, visited) {
	const unvisitedNeighbors = [];
	if(row > 0 && !visited[row - 1][col]) unvisitedNeighbors.push([row - 1,col]);
	if(row < matrix.length - 1 && !visited[row + 1][col]) unvisitedNeighbors.push([row + 1, col]);
	if(col > 0 && !visited[row][col - 1]) unvisitedNeighbors.push([row , col - 1]);
	if(col < matrix[0].length - 1 && !visited[row][col+1]) unvisitedNeighbors.push([row , col + 1]);
	return unvisitedNeighbors;