class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let sums = [];

	function search(tree, sum = 0){
		sum += tree.value; //sum = 11
		if(!tree.left && !tree.right){
			sums.push(sum);
			return;
		}
		if (tree.left) {
			search(tree.left, sum);
		}
		if (tree.right) {
			search(tree.right, sum);
		}
	}
	search(root);
	return sums;
}