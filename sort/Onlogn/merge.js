/* *************************
Time: O(n log n)
Space: O(n)
**************************** */
// helper function for merging two arrays
// create an empty array, take a look at the smallest values in each input array
//While still values to look at
   //if the value of first array is smalleter then the second array, push the value in the first array to our results
   //opposite for the other case
// use 2 cursors on the arrays
// move the cursor on the array that has the smaller value
// if anything is left in one array after ending the other array then add the remaining values to the output array

function merge(arr1, arr2){
  let output = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      output.push(arr1[i]);
      i++;
    }else{
      output.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    output.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    output.push(arr2[j]);
    j++;
  }
  return output;
}

// Break the array in half, call mergeSort
// base case arr.length <= 1
// then merge them back to the full length of the array

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }else{
    let firstHalf = arr.slice(0, Math.floor(arr.length/2));
    let secondHalf = arr.slice(Math.floor(arr.length/2),arr.length);
    return merge(mergeSort(firstHalf),mergeSort(secondHalf));
  }


}

console.log(mergeSort([7,6,5,-4,3,2,1]));