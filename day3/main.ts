const input = await Deno.readTextFile("./file.txt");

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let containedAlphabets: string[] = [];
let sum = 0;

const linesArr = input.split("\n").map((each) => each.replace("\r", ""));

//________Part_1_________
// const firstHalf = linesArr.map((eachLine) =>
//   eachLine.slice(0, eachLine.length / 2)
// );
// const secondHalf = linesArr.map((eachLine) =>
//   eachLine.slice(eachLine.length / 2, eachLine.length)
// );
// linesArr.forEach((_, idx) => {
//   for (const iterator of firstHalf[idx]) {
//     if (secondHalf[idx].includes(iterator)) {
//       containedAlphabets = [...containedAlphabets, iterator];
//       break;
//     }
//   }
// });
// containedAlphabets.forEach((each) => {
//   sum += alphabets.indexOf(each) + 1;
// });
// console.log(sum);

//________Part_2_________
let i = 0;
let threeSectionArr: string[][] = [];
while (i < linesArr.length) {
  threeSectionArr = [...threeSectionArr, linesArr.slice(i, i + 3)];
  i += 3;
}

threeSectionArr.forEach((eachSection) => {
  let firstlineSplit = eachSection[0].split("");
  for (const each of eachSection[1].split("")) {
    if (firstlineSplit.includes(each)) {
      if (eachSection[2].split("").includes(each)) {
        containedAlphabets = [...containedAlphabets, each];
        break;
      }
    }
  }
});

containedAlphabets.forEach((each) => {
  sum += alphabets.indexOf(each) + 1;
});
console.log(sum);
