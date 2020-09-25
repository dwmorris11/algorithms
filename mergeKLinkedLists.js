var mergeKLists = function(lists) {
  if(lists.length === 0) {
      return null;
  }
  if(lists.length === 1) {
      return lists[0];
  }
  let merged = lists[0];
  for(let i = 1; i < lists.length; i++) {
      merged = mergeLists(merged, lists[i]);
  }
  function mergeLists(a, b) {
      if(a === null) {
          return b;
      }
      if(b === null) {
          return a;
      }else if(a.val < b.val) {
          a.next = mergeLists(a.next, b);
          return a;
      }else {
          b.next = mergeLists(a,b.next);
          return b;
      }
  }
  return merged;
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}