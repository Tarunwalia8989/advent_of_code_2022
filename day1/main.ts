const input = await Deno.readTextFile("./file.txt");

const elves = input.split(/\n\s*\n/).map((each) => {
  return each
    .replaceAll("\r", "\n")
    .split(/\r?\n/)
    .filter((el) => el !== "");
});
// const elves = input.split("\n\n").map((each) => each.split("\n"));

const eachElvesCalories = elves.map((each) =>
  each.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0)
);

const sorted = eachElvesCalories.sort(function (a, b) {
  return b - a;
});
console.log(sorted[0] + sorted[1] + sorted[2]);
