//only works on a sorted array
//divide and conquer approach
function binarySearch(sortedArray, val){
  let left = 0;
  let right = sortedArray.length - 1;
  let middle = Math.floor(sortedArray.length/2);
  if(sortedArray[middle] === val) return middle;
  while ((sortedArray[middle] !== val) && (left < right)){
    if(val < sortedArray[middle]){
      right = middle - 1;
    }else{
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if(sortedArray[middle] === val){
    return middle;
  }else{
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 6, 8, 10], 4))
console.log(binarySearch([1, 2, 3, 4, 6, 8, 10], 5))
console.log(binarySearch([1, 2, 3, 4, 6, 8, 10], 10))
console.log(binarySearch([1, 2, 3, 4, 6, 8, 10], 1))
console.log(binarySearch([1, 2, 3, 4, 6, 8, 10], -1))