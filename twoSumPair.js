// a function that takes an array and a sum value
// we need to return every pair of numbers from that array that adds up to the sum;

// Rules:
// 1. Our result should be return an array of arrays
// 2. a number can be used in multiple pairs

// this code has time complexity of O(n^2)! 
// const twoSum = function (num, target) {
//    let pairs = [];
//    for (i = 0; i < num.length; i++) {
//      for (j = (num.length - 1); j >= i+1; j--) {
//        if (num[i] + num[j] === target) {
//           pairs.push([num[i],num[j]]);
//        }
//      }
//    }
//    return pairs;
//  };

// this code has O(n) complexity
function twoSum(numArray, sum) {
   var pairs = [];
   var hashTable = [];
  
   for (var i = 0; i < numArray.length; i++) {
     var currNum = numArray[i];
     var counterpart = sum - currNum;
     if (hashTable.indexOf(counterpart) !== -1) {
       pairs.push([ currNum, counterpart ]);
     }
     hashTable.push(currNum);
   }
   
   return pairs;
 }


 console.log(twoSum([1,6,4,5,3,3],7))