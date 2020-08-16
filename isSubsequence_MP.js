/*isSubsequence,
I: 2 strings
O: boolean if the first string chars form a sequence in the 2 nd string without their order changing
C: None
E: none
Simplifying Assumptions: first string is smaller or equal to second string length. All chars matter(spaces, special).  Case sensitive.

2 pointers
One pointer on the beginning of string1
One pointer on the beginning of string2
hello     a hello world
1         2
if(1 === 2) advance both pointers
else advance 2nd pointer and reset 1st pointer
if 1st pointer === string1 length - 1 then return true
*/

const isSubsequence = (string1, string2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let result = true;
  while(pointer1 < string1.length  && pointer2 !==string2.length){
    console.log(string1[pointer1], ' ', string2[pointer2], result)
    if(string1[pointer1] === string2[pointer2]){
      pointer1++;
      pointer2++;
      if(pointer1 === string1.length - 1){
        result = true;
      }
    } else {
      pointer1 = 0;
      pointer2++;
      result = false;
    }
  }
  return result;
}

isSubsequence('hello', 'hello world');
isSubsequence('hello', 'a hello world');