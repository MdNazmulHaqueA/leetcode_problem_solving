// var average = function(salary) {
//     let min = Math.min(...salary);
//     let max = Math.max(...salary);
//     let sum = salary.reduce((a, b) => a + b, 0)
//     let average  = (sum - max - min)/(salary.length - 2);
//     return average;
// };

// var average = function(salary) {
//    let totalSalary = salary.reduce(function(acc,val){
//        return acc+val
//    },0);
//     return (totalSalary - Math.max(...salary) - Math.min(...salary))/(salary.length -2);
// };


var average = function(salary) {
   salary.sort((a, b) => a - b);
   salary = salary.slice(1, salary.length - 1);
   salarySum = salary.reduce((acc, cur) => acc + cur, 0);
   return salarySum / salary.length;
};

console.log(average([4000,3000,1000,2000]));