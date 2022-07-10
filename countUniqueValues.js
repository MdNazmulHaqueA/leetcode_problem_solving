// frequency counter pattern
function countUniqueValues (arr){
   const lookup = {};
   for (let i = 0; i < arr.length; i++) {
     let val = arr[i];
     lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
   }
   return Object.keys(lookup).length;
}

console.log(countUniqueValues([1,1,2,3,4,5,6,7,8,8]));