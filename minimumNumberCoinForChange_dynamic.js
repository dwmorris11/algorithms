function minNumberOfCoinsForChange(n, denoms) {
	denoms = denoms.sort((a,b)=>a-b);
	let minCoins = Array(n+1).fill(Infinity);
	minCoins[0] = 0;
	for(let j = 0; j < denoms.length; j++){
		for(let i = 0; i < minCoins.length; i++){
			if(denoms[j] <= i){
				minCoins[i] = Math.min(minCoins[i],1+minCoins[i-denoms[j]]);
			}
		}
	}
	return minCoins[n] !== Infinity ? minCoins[n] : -1;
}