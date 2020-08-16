/* count unique values in an array
I: array of primitives
O: integer number
C: none
E: empty, mixed values
Simplifying Assumptions: case sensitive letters, integers, or special characters only, array is sorted
*/

const countUniqueValues = (array) => {
  //special cases
  if(array.length === 0){ return 0;}
  let count = 0;
  let pointer1 = 0;
  for(let pointer2 = 0; pointer2 < array.length; pointer2++){
    console.log('p1',array[pointer1]);
    console.log('p2',array[pointer2]);
    if(array[pointer1] !== array[pointer2] || pointer1 === pointer2){
      count++;
      pointer1 = pointer2;
    }
  }
  return count;
}

countUniqueValues([1,1,1,2,2,2,3,3,3,'a','a','ab'])