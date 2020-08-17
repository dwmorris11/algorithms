/* Valid Parens

I: string containing only (), {}, and []
Output: boolean representing if they are closed properly
C: none
E: empty is valid

'[()]' //true
'[(])' //false
'[](){}' //true

characteristics of valid:
equal opening and closing
string length is even
if parens are nested, inner most are opposites contiguous
if parens are not nested, opposites are contiguous

Approach:
Two pointers - look for contiguous parens.  delete.  start over.
string should be empty after all iterations
*/

var isValid = function(s) {
  //short circuit
  if(s.length%2 !== 0){
    return false;
  }
  s = s.split('');
  let pointer1 = 0;
  let openParens = ['(', '[', '{'];
  let closeParens = [')', ']', '}'];
  for (let pointer2 = 1; pointer2 < s.length; pointer2++) {
    if(openParens.indexOf(s[pointer1]) === closeParens.indexOf(s[pointer2]) &&
       openParens.indexOf(s[pointer1]) !== -1 && closeParens.indexOf(s[pointer2] !== -1)
      ) {
      console.log(openParens.indexOf(s[pointer1]));
      console.log(closeParens.indexOf(s[pointer2]));
      s.splice(pointer1,1);
      s.splice(pointer1,1);
      pointer1 = 0;
      pointer2 = 0;
    } else {
      pointer1++;
    }

  }
  if(s.length === 0) {
    return true;
  } else {
    return false;
  }
};

//implementation can be optimized