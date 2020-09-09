function findClosestValueInBst(tree, target) {
	var closest = tree.value;
	function search(tree){
		let currentNode = tree;
		while (currentNode !== null){
			if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
				closest = currentNode.value;
			}
			if (target < currentNode.value) {
				currentNode = currentNode.left;
			} else if (target > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				break;
			}
		}
	}
	search(tree);
	return closest;
}