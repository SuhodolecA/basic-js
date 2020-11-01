const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array = arr;
    let counter = 1;
    let check = true;
    while (check) {
      check = false;
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          array = array.flat()
          counter++;
          check = true;
        }
      }
    }
    return counter;
  }
};

// function depth (arr) {
    //     let array = arr;
    //     let counter = 1;
    //     let check = true;
    //     while (check) {
    //       check = false;
    //       for (let i = 0; i < array.length; i++) {
    //         if (Array.isArray(array[i])) {
    //           array = array.flat()
    //           counter++;
    //           check = true;
    //         }
    //       }
    //     }
    //     return counter;
    //   }
