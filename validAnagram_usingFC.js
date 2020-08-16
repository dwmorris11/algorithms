/*Compare 2 strings to determine if they are anagrams.  Anagrams will have the same frequency of letters and the same number of letters.  But not necessarily in the same order.

Using an object to count frequency of letters is a possible solution. */

/* Input: 2 strings
   Output: boolean
   Constraint: None
   Edge Case: None
   Assumptions: all letters, all lower case
   */

  const isValidAnagram = (str1, str2) => {
    //short circuit if they don't have the same length
    if(str1.length !== str2.length){
      return false;
    }
    let obj = {};
    for(let char of str1){
     obj[char] = obj[char]++ || 1;
    }
    for(let char of str2){
      if(obj[char]){
        obj[char]--;
      } else {
        return false;
      }
      if(obj[char] < 0){ return false;}
    }
    for(let key in obj){
      if(obj[key] !== 0){
        return false;
      }
    }
    return true;
  }