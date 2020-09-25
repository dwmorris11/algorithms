
function sumPrimes(n){
  let sum = 2;
  for(let i=3; i < n+1;i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

function isPrime(val){
  let maxIteration = Math.floor(Math.sqrt(val));
  for(let i = 2; i < maxIteration + 1; i++){
    if(val%i === 0){
      return false;
    }
  }
  return val > 1;
}

console.log(sumPrimes(9));
console.log(sumPrimes(2000000));
