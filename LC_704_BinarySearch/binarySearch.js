const search = function (nums, target) {
  let beg = 0;
  let end = nums.length - 1;

  while (beg <= end) {
    let mid = Math.floor((beg + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } 
    else if (nums[mid] > target) {
      end = mid - 1;
    } 
    else {
      beg = mid + 1;
    }
    
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));

