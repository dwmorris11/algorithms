const backspaceCompare = function (T, S) {
  T = removeExtra(T.split(""));
  S = removeExtra(S.split(""));
  if(S === T){
    return true;
  }
  return false;
}

const removeExtra = function (arr) {
  let resultArray = [];
  for(let i=0; i < arr.length; i++) {
    if(arr[i] === '#') {
     resultArray.pop();
    }else{
      resultArray.push(arr[i]);
    }
  }
  return resultArray.join("");
}