const l = e => {
  //   console.log(e, typeof e);
  return typeof e === "number";
};

// function transform(a) {
module.exports = function transform(arr) {
  //   console.log(arr);
  //   let arr = a;
  if (!Array.isArray(arr)) throw new Error("Invalid arguments");
  //   console.log(arr);
  let t = [];
  for (let i = 0; i < arr.length; i++) {
    // --discard-next
    // --discard-prev
    // --double-next
    // --double-prev
    // console.log()
    // slice [n, m)
    if (arr[i] === "--double-next" && i + 1 < arr.length)
      t.push(arr.slice(i + 1, arr.length).find(l));
    else if (arr[i] === "--double-prev" && i - 1 >= 0)
      t.push(
        arr
          .slice(0, i)
          .reverse()
          .find(l)
      );
    else if (arr[i] === "--discard-next" && i + 1 < arr.length) {
      //   console.log(arr);
      //   console.log(arr.slice(i, arr.length).findIndex(l));
      arr[i + arr.slice(i, arr.length).findIndex(l)] = "nope";
    } else if (arr[i] === "--discard-prev" && i - 1 >= 0) t.pop();
    //   console.log(
    //     arr
    //       .slice(0, i)
    //       .reverse()
    //       .findIndex(l)
    //   );
    //   t.splice(
    //     arr
    //       .slice(0, i)
    //       .reverse()
    //       .findIndex(l),
    //     1
    //   );
    else if (arr[i] === "nope" || typeof arr[i] !== "number") continue;
    else t.push(arr[i]);
    // console.log(arr);
  }
  console.log(t);
  return t;
};

// transform(["--discard-prev", true, "--discard-next"]);
