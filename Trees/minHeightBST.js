function minHeightBst(array) {
	return buildBST(array, null, 0, array.length - 1);
}
function buildBST(array, tree, left, right) {
	if(right < left) return;
	const middle = Math.floor((left+right)/2);
	const value = array[middle];
	if( tree === null) {
		tree = new BST(value);
	}else {
		tree.insert(value);
	}
	buildBST(array,tree,left,middle - 1);
	buildBST(array,tree,middle + 1, right);
	return tree;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
