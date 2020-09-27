class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		if(value < this.value){
			if(this.left === null){
				this.left = new BST(value);
			}else{
				this.left.insert(value);
			}
		}else{
			if(this.right === null){
				this.right = new BST(value);
			}else{
				this.right.insert(value);
			}
		}
		return this;
	}

  contains(value) {
    if(this.value === value){
			return true;
		}else if(this.value > value){
			if(this.left === null){ return false; }
			return this.left.contains(value);
		}else if(this.value < value){
			if(this.right === null){ return false; }
			return this.right.contains(value);
		} else {
			return true;
		}
  }

	remove(value, parent = null) {
		// go left if the value is less than the one to the left
		if(value < this.value && this.left !== null) {
			this.left.remove(value, this);
		// go right if the value is greater than the one to the right
	} else if (value > this.value && this.right !== null){
			this.right.remove(value, this);
	} else {
		// has 2 children nodes edge case
		if (this.left !== null && this.right !== null){
			// find the smallest value of the right subtree
			this.value = this.right.getMinValue();
			this.right.remove(this.value, this);
		} else if (parent === null) {
			if(this.left !== null) {
				this.value = this.left.value;
				this.right = this.left.right;
				this.left = this.left.left;
			}else if(this.right !== null) {
				this.value = this.right.value;
				this.left = this.right.left;
				this.right = this.right.right;
			}else {
				// this is a single node tree, do nothing
			}
		} else if (parent.left === this) {
			parent.left = this.left !== null ? this.left : this.right;
		} else if (parent.right === this) {
			parent.right = this.left !== null ? this.left : this.right;
		}
	}
	return this;
}

getMinValue() {
	if(this.left === null) {
		return this.value;
	}else {
		return this.left.getMinValue();
	}
}
}
