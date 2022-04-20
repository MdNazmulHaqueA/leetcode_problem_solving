//loop over k
// each time take the last index element
// add that element to the first position
//delete that element from the last
/* this code exceed time limit of Leet-code 
var rotate = function (nums, k) {
  let arr = nums;
  let lastIndex = nums.length - 1;
  for (i = 1; i <= k; i++) {
    element = arr[lastIndex];
    arr.unshift(element);
    arr.pop(element);
  }
  return arr;
};

*/
//// time limit exceeded

// var rotate = function (nums, k) {
//   k = k % nums.length;
//   for (i = 1; i <= k; i++) {
//     let element = nums[nums.length - 1];
//     nums.splice(0, 0, element);
//     nums.splice(nums.length - 1, 1);
//   }
//   return nums;
// };

///accepted
const rotate = (nums, k) =>{
   k=k%(nums.length);
   let spliced = nums.splice((nums.length-k),k);
   nums.splice(0,0,...spliced);
}



// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
