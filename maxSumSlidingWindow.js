
/**
Write a function called maxSubarrySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 */

// naive solution
// function maxSubarraySum(arr, num) {
//    if ( num > arr.length){
//      return null;
//    }
//    var max = -Infinity;
//    for (let i = 0; i < arr.length - num + 1; i ++){
//      temp = 0;
//      for (let j = 0; j < num; j++){
//        temp += arr[i + j];
//      }
//      if (temp > max) {
//        max = temp;
//      }
//    }
//    return max;
//  }
 
//  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
 
// Sliding window solution
 
function maxSubarraySum(arr, num){
   let maxSum = 0;
   let tempSum = 0;
   if (arr.length < num) return null;
   for (let i = 0; i < num; i++) {
     maxSum += arr[i]; //2+6+9 =17
   }
   tempSum = maxSum;
   for (let i = num; i < arr.length; i++) {
     tempSum = tempSum - arr[i - num] + arr[i]; // 17 - 2 + 2 = 17;  17 - 6 + 1 = 12;
     maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum;
 }
 
//  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
 console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));