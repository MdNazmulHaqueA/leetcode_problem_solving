var twoSum = function (nums, target) {
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    let sum = nums[i] + nums[j];
    if (sum === target) return [i + 1, j + 1];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    }
  }
};

/**
 
var twoSum = function(numbers, target) {
    let left_ptr = 0;
    let right_ptr = numbers.length - 1;
    
    while(left_ptr < right_ptr){
        const sum = numbers[left_ptr] + numbers[right_ptr];
        
        if(sum === target){
            return [left_ptr+1, right_ptr+1];
        } else if(sum < target){
            // Try and make sum bigger by picking a bigger number on the left
            ++left_ptr;
        } else if(sum > target){
            // Try and make sum smaller by picking a smaller number on the right
            --right_ptr;
        }
    }
    
    return [];
};


 */

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
