const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let result = [];
  let checker = true;
    if (!Array.isArray(arr)) {
      throw new Error('it\'s not an Array');  
    } else {
      arr.forEach((item, index, arr) => {
        if(item === '--discard-next') {
          if (index !== arr.length - 1) {
            result.push(item);
            checker = false;
          } 
        } else if (item === '--discard-prev') {
          if (index !== arr[0]) {
            result.pop();
            result.push(item);
          } 
        } else if (item === '--double-next') {
          if (index !== arr.length - 1) {
            result.push(item);
            result.push(arr[index + 1]);
          } 
        } else if (item === '--double-prev') {
          if (index !== arr[0]) {
            if (result[result.length - 1] !== undefined) {
              result.push(result[result.length - 1]); 
              result.push(item);
              }
          } 
        } else {
          if (checker) {
            result.push(item);
          } else {
            checker = true;
          }
        }
      })
    }
    
   return result.filter(item => exclude( item ));
};

function exclude( item ) {
return item != '--discard-next' && item != '--discard-prev' && item != '--double-next' && item != '--double-prev';
}



