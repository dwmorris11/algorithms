class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = depth(descendantOne, topAncestor);
	const depthTwo = depth(descendantTwo, topAncestor);
	if(depthOne > depthTwo) {
		return commonAncestor(descendantOne, descendantTwo, depthOne - depthTwo);
	} else{
		return commonAncestor(descendantTwo, descendantOne, depthTwo - depthOne);
	}

}

function depth(node, root) {
	let depth = 0;
	while(node !== root) {
		depth++;
		node = node.ancestor;
	}
	return depth;
}

function commonAncestor(lower, upper, diff) {
	console.log(lower, upper, diff);
	while(diff > 0) {
		diff--;
		lower = lower.ancestor;
	}
	while(lower !== upper) {
		lower !== null ? lower = lower.ancestor : null;
		upper !== null ? upper = upper.ancestor : null;
	}

	return lower;
}
