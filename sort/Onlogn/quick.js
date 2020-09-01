/* *****************************
Time: O(n log n), worst O(n^2)
Space: O(log n)
******************************* */


// Pivot helper
function pivot(arr, start=0, end=arr.length-1){
  function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  let pivotValue = arr[start];
  let swapIdx = start;
  for(let i = start + 1; i <= end; i++){
    if(arr[i] < pivotValue){
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx;
}

// Quicksort

function qSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    qSort(arr, left, pivotIndex - 1);
    qSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(qSort([-1, -10, 10, 23, 1, 5, 3, -100]));