function levenshteinDistance(str1, str2) {
	let matrix = [];
	for(let k = 0; k < str2.length + 1; k++) {
			const row = [];
		  for(let m = 0; m < str1.length + 1; m++){
				row.push(m);
			}
		row[0] = k;
		matrix.push(row);
	}

	for(let i = 1; i < str2.length + 1; i++) {
		for(let j = 1; j < str1.length + 1; j++) {
			if(str2[i-1] === str1[j-1]){
				matrix[i][j] = matrix[i-1][j-1];
			}
			else {
				matrix[i][j] = 1 + Math.min(matrix[i-1][j-1],matrix[i-1][j],matrix[i][j-1]);
			}
		}
	}
	return matrix[str2.length][str1.length];
}