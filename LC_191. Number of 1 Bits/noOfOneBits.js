// Convert to string, replace zeroes
// Convert the 32-bit unsigned integer to a string.
// Note: we'll have to pass a radix parameter of 2 to keep it in base 2.
// Remove the zeroes. Replace each zero with an empty string.
// Return the length of the resulting string.

var hammingWeight = function(n) {
  let strNum = n.toString(2);
  let count = 0;
  let arrNum = strNum.split("");
  for(let i=0;i<arrNum.length;i++){
      if(arrNum[i] === "1"){
          count++;
      }
  }
  return count;
};

// 92.62 68.51



var hammingWeight = function (int) {
  return int.toString(2).replaceAll("0", "").length;
};
//62 / 50


// 74 / 50
var hammingWeight = function(n) {
   return n.toString(2).replace(/0/g,'').length 
}


var hammingWeight = function(n) {
   /*
     declare count to be 0
     
     while n is truthy (greater than zero)
       
       set n to be the result of a bitwise AND with n-1
       
       increment count
       
     return count
   */
   
   let count = 0;
   
   while (n) {
     n &= n-1;
     count++;
   }
   
   return count;
 };

//  19 / 61



