/* ***************************************
Time: O(n^2)
Space: O(1)
*/

// naive solution, a swap function is useful
// no swaps optimizes it for a nearly sorted array
function bSort(arr){
  let noSwaps = true;
  for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i]>arr[j]){
        swap(arr, i, j);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

const swap = (arr, i1, i2) => {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
}

console.log(bSort([9,8,7,6,5,4,3,2,1]));
console.log(bSort([9,8,7,6,1,2,3,4]));
console.log(bSort([-9,-8,-7,-6,-5,-4,-3,-2,-1]));
console.log(bSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(bSort([1, 2, 3, 4, 10, 5, 6, 7, 8, 9])); // breaks