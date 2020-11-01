const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let minTurns = 2 ** disksNumber - 1;
  let speedInSeconds = turnsSpeed / (60 * 60);
  let resultSeconds = Math.floor(minTurns / speedInSeconds);
  return { turns: minTurns, seconds: resultSeconds }
};
