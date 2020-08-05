//Reverse the number, return 0 if it overflows on reverse
var reverse = function(x) {
 let neg = false;
  if(x<0){
   x *= -1;
   neg = true;
  }
 let value = parseInt(x.toString().split("").reverse().join(""));
 //javascript can handle up to 2^53
 if(value > Math.pow(2,31)+1 || value < -1 * Math.pow(2,31)){
   return 0;
 }
 if(neg) {
   return -1*value;
 }
 return value;
}

let nums = [-1, -2, -212, -321, 441, 12345678, 987654321, -999999999999];
nums.forEach((num) => {
  console.log(reverse(num));
});