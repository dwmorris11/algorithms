/* Are there Duplicates: Checks variable number of arguments to determine if any of the arguments contain duplicates.
I: Primitives
O: boolean
C: O(n) time, O(n) space; bonus: O(nlogn) time, O(1) space
E: none

*/

const areThereDuplicates = (...args) => {
  const count = args.reduce( (tally, arg) => {
    tally[arg] = (tally[arg] || 0) + 1 ;
    return tally;
  } , {})
  for(let key in count) {
    if(count[key] > 1){
      return true;
    }
  }
    return false;
  }

  areThereDuplicates(1,2,3,-1,'a',[1,2],[2,1])

  // Time O(n), Space O(n)
  // Sorting and then divide and conquer may work for certain inputs faster