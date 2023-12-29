const canMakeArithmeticProgression = arr =>{
   let sortedArray = arr.sort((a,b) => a-b);
   let diff = sortedArray[1] - sortedArray[0];
   for(let i=sortedArray.length-1; i>=2;i--){
      if(sortedArray[i] - sortedArray[i-1] !== diff){
         return false;
      }
   }
   return true;
}

console.log(canMakeArithmeticProgression([3,5,1]));
console.log(canMakeArithmeticProgression([1,2,4]));