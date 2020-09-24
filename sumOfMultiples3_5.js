// Find multiples of 3
// Find multiples of 5
// sum

function sumMultiples(n){
  let sum = 0;
  for(let i = 3; i < n; i++){
    if(i%3 === 0){
      sum += i;
    }
    if(i%3 === 0 && i%5 === 0){
      continue;
    }
    if(i%5 === 0){
      sum += i;
    }
  }
  return sum;
}



console.log(sumMultiples(10));
console.log(sumMultiples(1000));