 var addTwoNumbers = function(l1, l2) {
	let ptr = new ListNode();
	let overflow = 0;
	let cur = ptr;

	while (l1 || l2 || overflow) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + overflow;
		[sum, overflow] = [sum % 10, (sum / 10 | 0)];
		cur.next = new ListNode(sum);
		cur = cur.next;
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}

	return ptr.next;
};



// const addTwoNumbers = (l1, l2) => {
//    return  createList(l1, l2);
// };

// const createList = (l1, l2, carryOver = 0) => {
//     const summedVals = (l1?.val ?? 0) + (l2?.val ?? 0) + carryOver;
//     const node = new ListNode(summedVals % 10);

//     carryOver = Math.floor(summedVals / 10);

//     const shouldContinue = l1?.next || l2?.next || carryOver > 0;

//     if (shouldContinue) {
//         node.next = createList(l1?.next, l2?.next, carryOver);
//     }

//     return node;
// };
