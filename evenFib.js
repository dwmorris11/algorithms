function evenFib(x){
  let sumEven  = 0;
  let x2 = 1;
  let x1 = 1;
  for(let i = 2; i < x + 1; i++){
    let current = x1 + x2;
    if(current > 4000000)break;
    if(current%2 === 0){
      sumEven += current;
    }
    x2 = x1;
    x1 = current;
  }
  return sumEven;
}

console.log(evenFib(1000));
