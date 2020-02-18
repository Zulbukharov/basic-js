const MINUTE = 60;
const HOUR = 60;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return {
    seconds: (Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600),
    turns: Math.pow(2, disksNumber) - 1
  };
};
