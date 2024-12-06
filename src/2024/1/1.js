import fs from "fs";

const __dirname = new URL(".", import.meta.url).pathname;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

const lines = input.split("\n");

let leftList = [];
let rightList = [];
for (const line of lines) {
  const [left, right] = line.split(/\s+/);
  leftList.push(parseInt(left));
  rightList.push(parseInt(right));
}

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

let totalDistance = 0;
for (let i = 0; i < leftList.length; i++) {
  const distance = Math.abs(leftList[i] - rightList[i]);
  totalDistance += distance;
}

console.log(totalDistance);
