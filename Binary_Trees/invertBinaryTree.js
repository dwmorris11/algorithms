function invertBinaryTree(tree) {
  if(tree.left === null && tree.right === null){
		return tree;
	}
	let temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;
	tree.left ? invertBinaryTree(tree.left) : null;
	tree.right ? invertBinaryTree(tree.right) : null;
	return tree;
}