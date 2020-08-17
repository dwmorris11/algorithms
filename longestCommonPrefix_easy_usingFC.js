/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = {};
  let max = '';
  strs.forEach((word) => {
     for(let i = 1; i < word.length+1; i++) {
         let subWord = word.slice(0,i);
         if(result[subWord]){
           result[subWord][0]++;
         } else {
           result[subWord] = [1,subWord.length];
         }
     }
  });
  for( let key in result) {
      if( result[key][0] !== strs.length ) {
          delete result[key];
      }
  }
  for( let key in result) {
    if( result[key][1] > max.length) {
      max = key;
    }
  }
  return max;
};

//I: array of strings
//O: string with longest prefix
//C: none
//E: no common prefix return ""

//for each word, map out the possible prefixes
//look for longest prefix

//A Trie is commonly used for these problems and might be faster.