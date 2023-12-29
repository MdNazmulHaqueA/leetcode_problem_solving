var largestPerimeter = function (nums) {
  // Sort in DESC order
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    // Decalre the three sides of the triangle
    let a = nums[i],
      b = nums[i + 1],
      c = nums[i + 2];

    // Perform the check depending on the rule
    if (a < b + c) return a + b + c;
  }

  // If we cannot form a triangle, we return 0
  return 0;
};


// function largestPerimeter(numbers) {
//    numbers.sort((a, b) => b - a);

//    for (let i = 0; i < numbers.length; i++) {
//        if(numbers[i] < numbers[i + 1] + numbers[i + 2]) {
//            return numbers[i] + numbers[i + 1] + numbers[i + 2];
//        }
       
//    }

//    return 0;
// }


console.log(largestPerimeter([2, 1, 2]));
