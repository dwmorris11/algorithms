
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let set = new Set();
  let setSize = set.size;
  for(let i = 0; i < (s.length - longest); i++) {
      set.add(s[i]);
       setSize = 1;
       if(longest < setSize) {
           longest = setSize;
       }
      for(let j = i + 1; j < s.length; j++) {
          set.add(s[j]);
          if(setSize < set.size) {
              setSize = set.size;
              if(setSize > longest) {
                  longest = setSize;
              }
          }else if(longest < setSize) {
              longest = setSize;
              set.clear();
              setSize = 0;
              break;
          }else {
              set.clear();
              setSize = 0;
              break;
          }
      }
  }
  return longest;
};

/*
I: string
O: integer
C:
E: empty string

Approach:
keep temp variable of longest substring length
keep characters in a Set
use pointer to iterate through the length of the string
use second pointer to add characters to Set
check size of Set.  If it didn't change. A character was repeated.
*/