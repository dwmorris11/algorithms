/* ***************************************
Time: O(n^2)
Space: O(1)
*/





// insert the value in the sorted portion of the array one item at a time in the correct place
//pick the 2nd element in the array
//compare it to the one before it.
  //if necessary swap
//continue to the next element and if it is in the incorrect order iterate through the sorted portion and place the element in the correct place
//repeat until the array is sorted

// Insertion sort works well where data is near sorted and also where data is coming in near real time
function iSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){ // notice var instead of let here
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

console.log(iSort([9,8,7,6,5,4,3,2,1]));
console.log(iSort([9,8,7,6,1,2,3,4]));
console.log(iSort([-9,-8,-7,-6,-5,-4,-3,-2,-1]));
console.log(iSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(iSort([1, 2, 3, 4, 10, 5, 6, 7, 8, 9]));