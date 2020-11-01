const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  let t;
    if (typeof (sampleActivity) !== 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
        return false;
    } else if (isNaN(parseFloat(sampleActivity))) {
        return false;
    }
    t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K;
    return Math.ceil(t);
};
