/* Binary Tree, not BST */

var isSubtree = function(t, s) {
  let tree = preOrderTraverse(t);
  let subTree = preOrderTraverse(s);
  return isSubString(tree, subTree);
};

const preOrderTraverse = function(tree, output = [], left) {
   if(tree === null){
       if(left) {
           return output.push('lnull');
       }else{
           return output.push('rnull');
       }
   }
   output.push('#' + tree.val);
   preOrderTraverse(tree.left, output, true);
   preOrderTraverse(tree.right, output, false);
   return output;
}

const isSubString = function (tree, subTree, start = 0) {
   let begin = tree.indexOf(subTree[0], start);
   if(begin === -1) { return false;}
   for(let i = 0; i < subTree.length; i++) {
       if(tree[begin + i] !== subTree[i]) {
          return isSubString(tree, subTree, begin + 1);
       }
   }
   return true;
}