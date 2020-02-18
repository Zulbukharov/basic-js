const isNotValid = d => !(d instanceof Date) || isNaN(d.getTime());

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (isNotValid(date)) throw new Error("Error");
  // spring
  // summer
  // autumn
  // winter
  let s = "spring";
  let m = date.getMonth() + 1; // starts from 0
  if (m === 12 || m <= 2) s = "winter";
  else if (m >= 9 && m <= 11) s = "autumn";
  else if (m >= 6 && m <= 8) s = "summer";
  return s;
};
