// var searchInsert = function (num, target) {
//   let n = num.length;
//   for (let j = 0; j <= num.length; j++) {
//     if (num[j] == target) {
//       return j;
//     }
//     if (target > num[n - 1]) return n;
//     if (target < num[0]) return 0;
//     if (target > num[j] && target < num[j + 1]) return j + 1;
//   }
//   return 0;
// };


var searchInsert = function(nums, target) {    
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] === target) {
           return i;
       }
       
       if (nums[i] >= target) {
           return i;
       }
   }
   
   return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 3));

