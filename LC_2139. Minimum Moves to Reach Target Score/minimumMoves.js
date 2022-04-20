let minMoves = function (target, maxDoubles) {
  let moves = 0;
  while (target > 1) {
    if (maxDoubles === 0) {
      moves += target - 1;
      break;
    }

    if (target % 2 === 0) {
      // When target is divisible by 2
      target = target / 2;
      moves += 1;
      maxDoubles -= 1;
    } else {
      // Otherwise reduce by 1
      target -= 1;
      moves += 1;
    }
  }
  return moves;
};

// minMoves(19,2)
console.log(minMoves(19, 2));


