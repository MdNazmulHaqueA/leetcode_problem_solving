// var middleNode = function (head) {
//   const dummy = new ListNode(0, head);

//   let slow = dummy;
//   let fast = dummy;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;

//     //         update slow one more time for even case
//     if (fast && fast.next == null) {
//       slow = slow.next;
//     }
//   }

//   return slow;
// };

var middleNode = function(head) {
   let slow = head, fast = head
   while(fast !== null && fast.next !== null){
       slow = slow.next
       fast = fast.next.next
   }
   return slow
};