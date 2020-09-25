var longestPalindrome = function(s) {
  let left = 0;
  let max = [0, 0, 0];
  while(left < s.length - 1){
      for(let right = s.length - 1; right > left; right--){
          if(isPalindrome(s, left, right)) {
              if(max[2] < right - left) {
                  max[0] = left;
                  max[1] = right;
                  max[2] = right - left;
              }
          }
      }
      left++;
  }

  return s.slice(max[0],max[1] + 1);
};

const isPalindrome = function(str, left, right) {
  while(left <= right){
      if(str[left] !== str[right]){
          return false;
      }
      left++;
      right--;
  }
  return true;
}