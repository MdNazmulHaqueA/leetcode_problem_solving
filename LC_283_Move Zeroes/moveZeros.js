const moveZeroes = function (nums) {
  let count = 0;
  let size = nums.length;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }
  while (count < size) {
    nums[count++] = 0;
  }

  //   for (let i = nums.length - 1; i >= 0; i--)
  //     if (nums[i] === 0) nums.push(nums.splice(i, 1));

  // faster 21%, less memory 80%
  // const len = nums.length;
  // if (len === 1) return nums;

  // let i = 0;
  // for (let j = 0; j < len; j++) {
  //   if (nums[j] !== 0) {
  //     [nums[i], nums[j]] = [nums[j], nums[i]];
  //     i++;
  //   }
  // }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));
