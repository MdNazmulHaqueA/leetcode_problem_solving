// var countOdds = function(low, high) {
//    let count = 0;
//     for(let i = low; i<=high; i++){
//       if(Odd(i)) count++;
//     }
//     return count;
// };

// const Odd = function(num){
//    if(num%2!== 0){
//       return true;
//    }
// }







// Basically, set high and low equal to odd numbers.
// The number of odd numbers between high and low are now equal to (high - low) / 2 + 1;
// Handle the edge case of identical input that is even (like 2,2) with the first statement.

var countOdds = function (low, high) {
   if (high == low && high % 2 == 0) return 0;
        
        let count = 0; 
        let i = low; 
        
        if (low % 2 == 0) i++;
        if (high % 2 == 0) high--;
        
        return Math.floor((high - low) / 2) + 1;

};

console.log(countOdds(3,7));
console.log(countOdds(8,10));