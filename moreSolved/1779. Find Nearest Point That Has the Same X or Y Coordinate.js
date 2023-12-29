//99.07% faster

var nearestValidPoint = function (x, y, points) {
  let validPoints = [];
  let indexes = [];

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] == x || points[i][1] == y) {
      validPoints.push(points[i]);
      indexes.push(i);
    }
  }

  if (validPoints.length === 0) {
    return -1;
  } else if (validPoints) {
    //  let small =
    //    Math.abs(x - validPoints[0][0]) + Math.abs(y - validPoints[0][1]);
    let small = Infinity;
    let val = 0;
    // console.log(small);
    for (i = 0; i < validPoints.length; i++) {
      distance =
        Math.abs(x - validPoints[i][0]) + Math.abs(y - validPoints[i][1]);
      if (small > distance) {
        small = distance;
        val = i;
      }
    }
    return indexes[val];
  }
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4]
  ])
);
console.log(nearestValidPoint(3, 4, [[3, 4]]));
console.log(nearestValidPoint(3, 4, [[2, 3]]));
