var maximum69Number  = function(num) {
   let arrNum = num.toString().split("");
   for(let i=0; i< arrNum.length;i++){
      if(arrNum[i] === "6"){
         arrNum[i] = "9";
         break;
      }
   }
   return Number(arrNum.join(""));
};

// var maximum69Number  = function(num) {
//    let numString = num.toString().replace("6", "9");
//    return parseInt(numString);
// };
console.log(maximum69Number(9669));
console.log(maximum69Number(9999));