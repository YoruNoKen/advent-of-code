import fs from "fs";
const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

console.log(
  input.map(items => items.split("").filter(x => /\d/.test(x))).map(a => [a[0], a[a.length - 1]]).map(x => +x.join(""))
    .reduce((a, b) => a + b),
);
