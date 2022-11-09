// var defangIPaddr = function(address) {
//    return address.replaceAll(".","[.]")
// };

// var defangIPaddr = function (address) {
//    return address.split(".").join("[.]");
//  };

// function defangIPaddr(address) {
//     return address.replace(/\./g, '[.]')
// }

function defangIPaddr(address) {
   let result = '', length = address.length
   for (let i = 0; i < length; i++) {
       if (address[i] === '.') {
           result += '[.]'
       } else {
           result += address[i]
       }
   }
   return result
};