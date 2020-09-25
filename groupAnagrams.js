/* time complexity is too high */

var groupAnagrams = function(strs) {
  let testCase = strs.pop();
  let result = {[testCase]: [testCase]};
  while(strs.length !== 0){
      testCase = strs.pop();
      let inResult = false;
      for(let key in result) {
          if(isAnagram(key,testCase)) {
              result[key].push(testCase);
              inResult = true;
              break;
          }
      }
      if(!inResult) {
          result[testCase] = [testCase];
      }
  }
  return Object.values(result);
};

const isAnagram = function(source,test) {
 if(source === test) {return true;}
 if(!source || !test) {return false;}
 const tempSource = source.toLowerCase().split("").sort().join("");
 const tempTest = test.toLowerCase().split("").sort().join("");
 return tempSource === tempTest;
}

/* Determine if an anagram of the word exists
 If it does group it in an array.

 anagram exists if:
 it contains all the original letters exactly once

 edge cases would be repeating letters
 empty strings
 single letters
 */

 /* shorter time complexity */

 var groupAnagrams = function(strs) {
  if(strs.length === 0) { return [];}
  let result = {};
  strs.forEach((string) => {
      let count = Array(26).fill(0);
      for(let i = 0; i < string.length; i++) {
          count[string[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }
      if(result.hasOwnProperty(count)) {
          result[count].push(string);
      }else {
          result[count] = [string];
      }
  });
  return Object.values(result);
}