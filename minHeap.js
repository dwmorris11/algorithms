class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
  	const firstParent = Math.floor((array.length - 2) / 2);
		for (let current = firstParent; current >= 0; current--){
			this.siftDown(current, array.length - 1, array);
		}
		return array;
  }

  siftDown(current, end, heap) {
    let leftChild = current * 2 + 1;
		while(leftChild <= end) {
			const rightChild = current * 2 + 2 <= end ? current * 2 + 2 : -1;
			let iToSwap;
			if (rightChild !== -1 && heap[rightChild] < heap[leftChild]) {
				iToSwap = rightChild;
			} else {
				iToSwap = leftChild;
			}
			if (heap[iToSwap] < heap[current]) {
				this.swap(current, iToSwap, heap);
				current = iToSwap;
				leftChild = current * 2 + 1;
			} else {
				return;
			}
		}
  }

  siftUp(current, heap) {
		let parent = Math.floor((current - 1)/2);
		while (current > 0 && heap[current] < heap[parent]) {
			this.swap(current, parent, heap);
			current = parent;
			parent = Math.floor((current - 1)/2);
		}
  }

	swap(a, b, heap) {
		const temp = heap[b];
		heap[b] = heap[a];
		heap[a] = temp;
	}

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0,this.heap.length-1, this.heap);
		const value = this.heap.pop();
		this.siftDown(0, this.heap.length - 1, this.heap);
		return value;
  }

  insert(value) {
    this.heap.push(value);
		this.siftUp((this.heap.length-1), this.heap)
  }
}