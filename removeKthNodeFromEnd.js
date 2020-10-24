class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let pointer1 = head;
	let pointer2 = head;
	for (let i = 1; i <= k; i++){
		pointer2 = pointer2.next;
	}
	if(pointer2 === null){
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	while(pointer2.next != null){
		pointer1 = pointer1.next;
		pointer2 = pointer2.next;
	}
  pointer1.next = pointer1.next.next;
}