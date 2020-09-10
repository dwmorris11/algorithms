/* Type of problem that benefits from sorting first
and then moving the pointers O(nlogn) time of sorting
is dwarfed by O(n^2) time of moving the pointers */

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b)=>a-b);
	arrayTwo.sort((a,b)=>a-b);
	let i = 0;
	let j = 0;
	let smallestDiff = Infinity;
	let currentDiff = Infinity;
	let smallestPair = [];
	while(i < arrayOne.length && j < arrayTwo.length){
		let numOne = arrayOne[i];
		let numTwo = arrayTwo[j];
		if(numOne < numTwo){
			currentDiff = numTwo - numOne;
			i++;
		} else if (numTwo < numOne) {
			currentDiff = numOne - numTwo;
			j++;
		} else {
			return [numOne, numTwo];
		}
		if (smallestDiff > currentDiff) {
			smallestDiff = currentDiff;
			smallestPair = [numOne, numTwo];
		}
	}
	return  smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;


// -1, 3, 5, 10, 20, 28
//                   |
// 15, 17, 26, 134, 135
//             |
// 16, 12, 10, 5, 5, 3, 6, 2, RB,

// set both pointers at 0,
	// find the difference
	// move one of the pointers
	// if the difference gets smaller keep moving the pointer
	// if it gets larger, reset the pointer and move the second pointer
	// continue doing so until the end of one of the arrays is reached.
	// move the other pointer to see if it gets smaller.  If it does,
	// continue moving it until it gets larger then stop.