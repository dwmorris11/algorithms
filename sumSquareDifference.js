function sumSquareDifference(range){
  let sum = 0;
  let sumSquares = 0;
  for(let i = 1; i < range + 1; i++){
    sum += i;
    sumSquares += i*i;
  }
  return (sum*sum) - sumSquares;
}

console.log(sumSquareDifference(100))