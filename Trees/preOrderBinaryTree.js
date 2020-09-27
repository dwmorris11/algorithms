const preorderTraversal = function(root) {
  /* [ 1, null, 2 , 3]
     [ 1, 2, 3, null, null, 4, null, null, 5, 6, null, null, 7]
     [ root, left, right, left, ...]
     pre-order - root,left, right
  */
  /*root is a node
    root[1] child node
    root[2] child node
    I: tree
    O: array of traversal order
    C: pre-order
    E: no node
    B: no child nodes
    */
  let order = [];
      const traverse = function(child){
      if(child[0] !== null){
          order.push(child.shift());
      }else{
          child.shift();
      }
      //leaf node
      if(child.length === 0) {
          return;
      }
      traverse(child);
  }
  traverse(root);
  return order;
};

console.log(preorderTraversal([1,null,2,null,3, 4, 5, null, 6]));