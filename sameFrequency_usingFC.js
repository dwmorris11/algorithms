/* Given 2 numbers determine if they have the same frequency of digits.
I: 2 integers
O: boolean
C: O(N) time
E: numbers not of the same length, negative numbers

Approach is frequency counter */

const sameFrequency = (num1, num2) => {
  //coerce into positive numbers
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  num1 = String(num1).split("");
  num2 = String(num2).split("");
  //Short circuit if they are not the same length
  if(num1.length !== num2.length) {
    return false;
  }
  let obj = {};
  for(let digit in num1){
    obj[digit] = obj[digit]++ || 1;
  }
  for(let digit in num2){
    if(obj.hasOwnProperty(digit)){
      obj[digit]--;
      if(obj[digit] < 0){
        return false;
      }
    }else {
      return false;
    }
  }
  return true;
}