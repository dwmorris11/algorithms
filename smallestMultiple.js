function check(value, range){
  for(let i = 1; i < range + 1; i++){
    if(value%i !== 0){
      return false;
    }
  }
  return true;
}

function smallestMultiple(largestNum){
 let i = 1;
 let flag = false;
 while(!flag){
   i++;
   flag = check(i, largestNum);
 }
 return i;
}

console.log(smallestMultiple(20));