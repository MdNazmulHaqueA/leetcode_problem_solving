// const runningSum = nums => {
//   let prev = 0;
//   let output = nums.map(x => (prev = x + prev));
//   return output;
// };

const runningSum = nums => {
   nums.reduce((a,c,i,arr) => arr[i] += a)
   return nums
}
console.log(runningSum([1, 2, 3]));
