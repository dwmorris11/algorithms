var numDecodings = function(s) {
  let memo = {};
  if(s === null || s.length === 0 || s === '0') {
      return 0;
  }

  return decode(s,0, memo);
}

var decode = function(s,i, memo) {
      if(i === s.length) {
          return 1;
      }
      if(s[i] === '0') {
          return 0;
      }
      if(i === s.length - 1) {
          return 1;
      }
      if(memo.hasOwnProperty(i)) {
          return memo[i];
      }

      let ans = decode(s, i+1, memo);
      if(Number(s[i]+s[i+1]) <= 26) {
          ans += decode(s, i+2, memo)
      }

      memo[i] = ans;
      return ans;
  }