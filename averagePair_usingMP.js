/* Average Pair
I: sorted array of integers, target average
O: boolean where there is a pair of numbers that equal a target average
C: O(n)
E: empty array or only 1 value
*/

/* Using multiple pointers:
find the average of the first and last number
if left pointer === right pointer return false
if the average < target average move left pointer up
if the average > target average move right pointer down
if the average === target average return true
*/

const averagePair = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let average = 0;
  while((left !== right) && (left < right)){ //true; true
      average = (arr[left]+arr[right])/2; //2; 2.5
      if(average === target){  //false; true
        return true;
      }
      if(average < target) { // true; false
        left++; // 1; null
      } else {
        right--; // null; 1
      }

  }
return false;
}

averagePair([1,3,3,5,6,7,10,12,19],8);

//O(n) time, O(1) space