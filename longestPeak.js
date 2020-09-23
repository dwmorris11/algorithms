function longestPeak(array) {
	let longestPeakLength = 0;
	let i = 1;
	while (i < array.length - 1){
		//find the peak defined by 3 values left, middle, right
		const isPeak = array[i-1] < array[i] && array[i+1] < array[i];
		if(!isPeak){
			i++;
			continue;
		}
		//spread the window left until it reaches the end of a valley
		let left = i - 2;
		while(left >= 0 && array[left] < array[left + 1]){
			left--;
		}
		let right = i + 2;
		while(right < array.length && array[right] < array[right - 1]){
			right++;
		}

		const currentPeakLength = right - left - 1;
		longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
		i = right;
	}
	return longestPeakLength;
}
