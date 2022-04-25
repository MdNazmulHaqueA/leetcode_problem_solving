// var removeNthFromEnd = function(head, n) {
//    let root = head;
//    let clone = head;
//    let len = 0;
  
//    while (clone) {
//      len++;
//      clone = clone.next;
//    }
   
//    let count = len - n;
//    if (count === 0) return head.next;
//    while (root && count > 1) {
//      root = root.next;
//      count--;
//    }
 
//    root.next = root.next && root.next.next;
//    return head;
//  };



var removeNthFromEnd = function(head, n) {
   if(!head.next) return null;
   
   let prev = head;
   let toDeleted = head;
   let it = head;
   let count = 1;
   
   while(it.next){
     it = it.next;
     if(count >= n){
       prev = toDeleted;
       toDeleted = prev.next;
     }
     count++;
     
   }
   
   if(prev.next === toDeleted.next){
     head = head.next;
     return head;
   }
   
   prev.next = toDeleted.next
   return head;
 };
