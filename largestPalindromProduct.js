/*
Find the largest palindrome made from
the product of two 3 digit numbers
*/

/*
1) Perform the multiplication
2) Check if it is a palindrome
*/

function largestPalindromeProduct(x){
  let minimum = Math.pow(10, x-1);
  let maximum = Math.pow(10,(x)) - 1;
  let maxPal = 0;
  for(var i = maximum; i > minimum; i--){
    for(var j = maximum; j > minimum; j--){
      let product = i*j;
      pal = isPalindrome(product);
      if(pal){
        if(product > maxPal){
          maxPal = product;
        }
      }
    }
  }

  return maxPal;
}

function isPalindrome(number){
  const array = number.toString().split("");
  let left = 0;
  let right = array.length - 1;
  while(left <= right){
    if(array[left] !== array[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(largestPalindromeProduct(3));
console.log(isPalindrome(913*993))