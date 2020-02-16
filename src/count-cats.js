module.exports = function countCats(m) {
  let cats = 0;
  m.forEach(n => {
    n.forEach(f => {
      cats = f === "^^" ? cats + 1 : cats;
    });
  });
  return cats;
};
