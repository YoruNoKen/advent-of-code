import fs from "fs";

// const inp = `jlbclhxp72fivektxfxbtwonetxl
// 7one718onegfqtdbtxfcmd
// xvtfhkm8c9
// 914two8
// vxzzvdhfqfsix83c1ttvbbstxgdrkfcnmm3
// 76mkvhmbkpm
// 8sixssmlzlhrnineggmrvg6`.split("\n");
const inp = fs.readFileSync("./input.txt", "utf-8").split("\n");

const wordNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const extractNumbers = (input) => {
  input = input.split("").reverse().join("");


  const lastNumbers = input.match(/(?:eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/g).map(x =>
    x.split("").reverse().join("")
  ).reverse();
  const last = /\d/.test(lastNumbers[lastNumbers.length-1]) ? lastNumbers[lastNumbers.length-1] : wordNumbers[lastNumbers[lastNumbers.length-1]];

  input = input.split("").reverse().join("");
  const firstNumbers = input.match(/(?:one|two|three|four|five|six|seven|eight|nine|\d)/g);
  const first = /\d/.test(firstNumbers[0]) ? firstNumbers[0] : wordNumbers[firstNumbers[0]];
  

  return +`${first}${last}`;
};

console.time("x")
console.log(
  inp.map((line) => extractNumbers(line)).reduce((a, b) => a + b, 0),
);
console.timeEnd("x")
