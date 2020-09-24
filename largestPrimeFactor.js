function largestPrimeFactor(n){
  const maxIteration = Math.floor(Math.sqrt(n));
  let maxPrime = 1;
  for(let i = maxIteration; i > 2; i--){
    if(n%i === 0){
      if(isPrime(i)){
        maxPrime = i;
        break;
      }
    }
  }

  function isPrime(val){
    for(let i = 2; i < val; i++){
      if(val%i === 0){
        return false;
      }
    }
    return val > 1;
  }
  return maxPrime;
}

console.log(largestPrimeFactor(600851475143));
console.log(largestPrimeFactor(13195));

/*

1) Use Rhos algorithm: check every number less than square root of n
2) Check if it is a factor
3) Check if it is prime
4) record max value

