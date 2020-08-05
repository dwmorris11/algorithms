const isPalindrome = function(x) {
  if(x < 0){
    return false;
  }
  const splitNumber = x.toString().split("");
  for(let i = 0; i < Math.ceil(splitNumber.length/2); i++){
    let j = (splitNumber.length-1) - i;
    if(splitNumber[i]!==splitNumber[j]){
        return false;
    }
  }
  return true;
};