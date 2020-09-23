function numberOfWaysToMakeChange(n, denoms) {
	let ways = Object.fromEntries(Array.from(Array(n+1), (x,i)=>[i,0]));
	ways[0] = 1;
	denoms.forEach((coin) => {
		for(let way in ways){
			if(coin <= way){
				ways[way] += ways[way-coin];
			}
		}
	});
	return ways[n];
}