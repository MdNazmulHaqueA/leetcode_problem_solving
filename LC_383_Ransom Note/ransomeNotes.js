const canConstruct = function (ransomNote, magazine) {
   let noteArr = ransomNote.split("");
   let magazineArr = magazine.split("");
   let magazineObj = {};
  
   magazineArr.forEach(char => {
     if (!magazineObj[char]) magazineObj[char] = 0;
     magazineObj[char]++;
   });
   let noteIsPossible = true;
 
  
   noteArr.forEach(char => {
     if (magazineObj[char]) {
       magazineObj[char]--;
       if (magazineObj[char] < 0) noteIsPossible = false;
     } else {
       noteIsPossible = false;
     }
   });
   return noteIsPossible;
 };
 
 console.log(canConstruct("aa","aab"));

// another solution

// var canConstruct = function(ransomNote, magazine) {
//    const arr = magazine.split('');
//    for (let i = 0; i < ransomNote.length; i++) {
//        if (arr.indexOf(ransomNote[i]) === -1) {
//            return false;
//        } else {
//            arr.splice(arr.indexOf(ransomNote[i]), 1);
//        }
//    }
//    return true;
// };

// another solution [this solution is taken from mmartire
// var canConstruct = function(ransomNote, magazine) {
//    const map = {};
//    for(let letter of magazine) {
//        if (!map[letter]) {
//            map[letter] = 0;
//        }
//        map[letter]++;
//    }
   
//    for(let letter of ransomNote) {
//        if(!map[letter]) {
//            return false;
//        } 
//        map[letter]--;
//    }
//    return true;
// };