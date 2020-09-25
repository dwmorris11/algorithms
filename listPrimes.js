/*
1) determine if a number is prime
2) add it to an array
3) check the length of the array
4) when it reaches 10,001 then return that number.
*/


function isPrime(val){
  let maxIteration = Math.floor(Math.sqrt(val));
  for(let i = 2; i < maxIteration + 1; i++){
    if(val%i === 0){
      return false;
    }
  }
  return val > 1;
}

function listPrimes(maxListSize){
  let count = 0;
  let i = 1;
  while(count < maxListSize){
    i++;
    isPrime(i) ? count++ : null;
  }
  return [count, i];
}

console.log(isPrime(13))
console.log(listPrimes(10001));
console.log(listPrimes(6));