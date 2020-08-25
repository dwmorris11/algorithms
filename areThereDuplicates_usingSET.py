'''
 Are there Duplicates: Checks variable number of arguments to determine if any of the arguments contain duplicates.
I: Primitives
O: boolean
C: O(n) time, O(n) space; bonus: O(nlogn) time, O(1) space
E: none
'''

def are_there_duplicates(lst):
    new_list = set(lst)
    if len(new_list) == len(lst):
      return False
    return True

print(are_there_duplicates([1,1,1,1,2,2,2,2]))
print(are_there_duplicates([1,2,3,4,5,6,7,8]))
