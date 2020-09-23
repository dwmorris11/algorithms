class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
	return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, min, max) {
	if (tree === null) return true;
	if (tree.value < min || tree.value >= max) return false;
	const leftIsValid = validateBstHelper(tree.left, min, tree.value);
	return leftIsValid && validateBstHelper(tree.right, tree.value, max);
}
