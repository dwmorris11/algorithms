'''
 Are there Duplicates: Checks variable number of arguments to determine if any of the arguments contain duplicates.
I: Primitives
O: boolean
C: O(n) time, O(n) space; bonus: O(nlogn) time, O(1) space
E: none
'''
import functools

def areThereDuplicates(**lst):
    count = functools.reduce((lambda tally, arg:
        tally[arg] = (tally[arg] + 1) or 0)({}), lst)


# const areThereDuplicates = (...args) => {
#   const count = args.reduce( (tally, arg) => {
#     tally[arg] = (tally[arg] || 0) + 1 ;
#     return tally;
#   } , {})
#   for(let key in count) {
#     if(count[key] > 1){
#       return true;
#     }
#   }
#     return false;
#   }

#   areThereDuplicates(1,2,3,-1,'a',[1,2],[2,1])