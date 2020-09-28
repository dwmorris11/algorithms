var calPoints = function(ops) {
  let sum = [];
  for( let i = 0; i < ops.length; i++) {
      if(ops[i] === 'D') {
          sum.push(sum[sum.length - 1]*2);
      }else if(ops[i] === 'C') {
          sum.pop();
          ops.splice(i-1, 2);
          i -= 2;
      }else if(ops[i] === '+') {
          sum.push(sum[sum.length - 2] + sum[sum.length - 1]);
      }else {
          sum.push(Number(ops[i]));
      }
  }
  return sum.reduce((acc, cV) => acc + cV);
};