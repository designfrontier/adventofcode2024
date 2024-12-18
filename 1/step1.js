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
  .map((l, i) => {
    return Math.abs(l - right[i]);
  })
  .reduce((a, c) => a + c);
