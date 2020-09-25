var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
      return l2;
  }else if (l2 === null) {
      return l1;
  }else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
}

class ListNode {
     constructor(val, next){
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
     }
}

// class List {
//   constructor(node){
//     this.head = node;
//     this.tail = null;
//   }
//   insertNode(value){
//     this.tail = new ListNode(value, null);
//     return this.head;
//   }
// }

// let l1 = new List(new ListNode(5));
// console.log(l1);
// console.log(mergeTwoLists(l1,l2));
