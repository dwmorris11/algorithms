
// Brute force
function findPythTrip(){
for(let a = 1; a < 1000; a++){
  for(let b = 1; b < 1000; b++){
    for(let c = 1; c < 1000; c++){
      let valA = a + b + c - 1000;
      let valB = Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2);
      if(valA === 0 && valB === 0){
        return a*b*c;
      }
    }
  }
}
return [];
}


console.log(findPythTrip());
/*
a + b + c = 1000
a^2 + b^2 = c^2

Find a*b*c

a + b + c - 1000 = a^2 + b^2 - c^2

*/

