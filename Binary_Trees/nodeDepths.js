function nodeDepths(root) {
  var sumOfDepths = 0;

	function search(tree, depth = -1) {
		depth++;
		sumOfDepths += depth;
		if(!tree.left && !tree.right){
			console.log(depth, sumOfDepths, tree.value)
			return;
		}
		if(tree.left){
			search(tree.left, depth);
		}
		if(tree.right){
			search(tree.right, depth);
		}
	}
	search(root);
	return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}