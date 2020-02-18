module.exports = function createDreamTeam(m) {
  s = "";
  if (!Array.isArray(m)) return false;
  m.forEach(v => {
    s +=
      typeof v === "string"
        ? v
            .trim()
            .charAt(0)
            .toUpperCase()
        : "";
  });
  s = s
    .split("")
    .sort()
    .join("");
  return s;
};
