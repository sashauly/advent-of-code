import fs from "fs";

const __dirname = new URL(".", import.meta.url).pathname;
const filename = `${__dirname}/input.txt`;

const input = fs.readFileSync(filename, "utf-8");

const reports = input.split("\n");

let totalSafeLines = 0;

for (const report of reports) {
  const levels = report.split(" ").map(Number);

  if (isReportSafe(levels)) {
    totalSafeLines++;
  } else if (canMakeSafeByRemovingOneLevel(levels)) {
    totalSafeLines++;
  }
}

function isReportSafe(levels) {
  const isIncreasing = levels.every(
    (level, index) => index === 0 || level > levels[index - 1]
  );
  const isDecreasing = levels.every(
    (level, index) => index === 0 || level < levels[index - 1]
  );

  if (!(isIncreasing || isDecreasing)) return false;

  return levels.every(
    (level, index) =>
      index === 0 ||
      (Math.abs(level - levels[index - 1]) >= 1 &&
        Math.abs(level - levels[index - 1]) <= 3)
  );
}

function canMakeSafeByRemovingOneLevel(levels) {
  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isReportSafe(modifiedLevels)) return true;
  }
  return false;
}

console.log(totalSafeLines);
