// use the same swap function
const swap = (arr, i1, i2) => {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
}

//store 1st element as smallest
//compare to the next item until you find a smaller number
//if the min is not the idx you started with swap the values

function sSort(arr) {

  for(let j = 0; j < arr.length; j++){
    let min = j;
    for(let i = j + 1; i < arr.length; i++){
      if(arr[i] < arr[min]){
        min = i;
      }
    }
    if(arr[j] > arr[min]){
      swap(arr, j, min);
    }
  }
  return arr;
}

console.log(sSort([9,8,7,6,5,4,3,2,1]));
console.log(sSort([9,8,7,6,1,2,3,4]));
console.log(sSort([-9,-8,-7,-6,-5,-4,-3,-2,-1]));
console.log(sSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sSort([1, 2, 3, 4, 10, 5, 6, 7, 8, 9]));