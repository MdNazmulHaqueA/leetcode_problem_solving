let numberOfSteps = function(num) {
    let steps = 0;
    let currentNumber = num;
    while(currentNumber !=0){
       if(currentNumber%2 == 0){
          steps ++;
          currentNumber = currentNumber/2;
       }
       else{
          steps++;
          currentNumber--;
       }
    }
    return steps;
};

// numberOfSteps(14);
console.log(numberOfSteps(14));
console.log(numberOfSteps(8));