/* maxSubarraySum
find the maximum sum of n consecutive numbers in an array
I: array of integers, size(n) of subarray
O: Integer sum
C: None
E: n bigger than length of array return null

1) Begin at the beginning of the array
2) Sum the first n numbers
3) Set that value = max
4) next subtract the first number and add the next number
5) if the value is bigger than max then set the new max

continue doing so until the end of the array is reached (array length - n)

6) return max

SLIDING WINDOW
*/

const maxSubarraySum = (array, n) => {
  if(n > array.length) {
    return null;
  }
  let max = array[0];
  let temp = 0;
  for (let j = 0; j < n; j++) {
    temp += array[j];
    if(temp > max) {
      max = temp;
    }
  }
  for (let i = 1; i < array.length - n + 1; i++) {
    temp = temp - array[i-1] + array[(i-1)+n];
    if(temp > max){
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([1,2,3,4,5,6,7,8], 4)
maxSubarraySum([100,200,300,400], 2)
maxSubarraySum([2,3],3)