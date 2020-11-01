const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let result = str;
  let str1 = '';
  let resultArr = [];
  options = options;
  let repeatTimes = options.repeatTimes || 0;
  let separator  = options.separator;
  let addition  = options.addition;
  let additionRepeatTimes  = options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator;

  if (typeof str !== typeof addition && addition !== undefined) {
    result = str.toString();
    addition = addition.toString();
  }

  if (repeatTimes === 0 && additionRepeatTimes === 0) {
    return `${str}${addition}`
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i + 1 === additionRepeatTimes) {
       str1 += `${addition}`;
    } else {
       str1 += `${addition}${additionSeparator}`;
    }
     
  }
   result = `${result}${str1}`;

   for (i = 0; i < repeatTimes; i++) {
     resultArr.push(result);
   }

  return resultArr.join(separator || '+');
};
  