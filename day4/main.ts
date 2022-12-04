const input = await Deno.readTextFile("./file.txt");

const pairArr = input.split("\n").map((each) => each.replace("\r", ""));

const eachPairArr = pairArr.map((each) => each.split(","));

let finalPair = 0;
const splited = eachPairArr.map((each) =>
  each.map((each2) => each2.split("-"))
);

// _____Part_1_____
// splited.forEach((each1) => {
//   if (+each1[0][0] <= +each1[1][0] && +each1[0][1] >= +each1[1][1]) {
//     finalPair++;
//   } else if (+each1[0][0] >= +each1[1][0] && +each1[0][1] <= +each1[1][1]) {
//     finalPair++;
//   }
// });

// _____Part_2_____
splited.forEach((each1) => {
  if (+each1[0][0] <= +each1[1][0] && +each1[0][1] >= +each1[1][0]) {
    finalPair++;
  } else if (+each1[0][0] >= +each1[1][0] && +each1[1][1] >= +each1[0][0]) {
    finalPair++;
  }
});

console.log(finalPair);
