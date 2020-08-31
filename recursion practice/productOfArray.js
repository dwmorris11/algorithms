// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
  let val = arr.pop();
  if(arr.length === 0){
      return val;
  }
  return val * productOfArray(arr);
}