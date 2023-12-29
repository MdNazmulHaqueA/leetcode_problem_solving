var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  let mismatches = [];
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] !== s1[i]) {
      mismatches.push(i);
    }
  }
  if (mismatches.length !== 0 && mismatches.length !== 2) {
    return false;
  }
  return (
    s1[mismatches[0]] === s2[mismatches[1]] &&
    s1[mismatches[1]] === s2[mismatches[0]]
  );
};

//Two pointers move to each other and look for differences in strings. When two differences are found, we swap in s2 and compare a new string with the s1 string. We assume that after making only one swap, we can check for equality and return the result. If there is zero or only one difference we return s1 === s2.

// var areAlmostEqual = function(s1, s2) {
//    let left = 0;
//    let right = s1.length - 1;
//    while (left < right) {
//      // perform only one swap and return result
//      if (s1[left] !== s2[left] && s1[right] !== s2[right]) {
//        const newStr = s2.slice(0, left) + s2[right]+ s2.slice(left + 1, right) + s2[left] + s2.slice(right + 1);
//        return s1 === newStr;
//      }
//     // move pointers
//      if (s1[left] === s2[left]) left++;
//      if (s1[right] === s2[right]) right--;
//    }
//    // This check is against zero or one difference like "aa" and "ab".
//    return s1 === s2;
//  };

console.log(areAlmostEqual("race", "rage"));
console.log(areAlmostEqual("kelb", "kelb"));
