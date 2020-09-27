/*inOrder Traversal of a binary tree is
left-root-right
[1,null,2,3] => [1,3,2]
          1
            \
             2
           /
          3
*/
/*
  go left to the first leaf node
  return to root node
  go right to the first leaf node
  return to the root node

  if child[1] && child[2] is null then it is a leaf
  */

