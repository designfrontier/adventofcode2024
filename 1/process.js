const data = require("./data.json");

const lists = data.reduce(
  (a, c) => {
    a.left.push(c[0]);
    a.right.push(c[1]);

    return a;
  },
  { left: [], right: [] }
);

const left = lists.left.sort();
const right = lists.right.sort();

const distance = left
  .map((l) => {
    return l * right.filter((r) => r === l).length;
  })
  .reduce((a, c) => a + c);

console.log(distance);
