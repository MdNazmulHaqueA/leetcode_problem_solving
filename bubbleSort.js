function bubbleSort(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        //   var temp = array[j];
        //   array[j] = array[j + 1];
        //   array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));
console.log(bubbleSort([5,3,8,2,1,4]));
