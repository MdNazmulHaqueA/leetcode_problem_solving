// const runningSum = function (nums) {
//    let numbers = [];
//    let sum = 0;
//    for (let i = 0; i < nums.length; i++) {
//       sum = sum + nums[i];
//       numbers.push(sum);
//    }
//    return numbers;
// };

const runningSum = function (nums) {
  //   let sum = nums[0];
  //   for (i = 1; i < nums.length; i++) {
  //     sum += nums[i];
  //     nums[i] = sum;
  //   }
  //   return nums;

  let sum = 0;
  nums = nums.map(num => (sum += num));
  return nums;
};
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
