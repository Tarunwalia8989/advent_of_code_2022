const input = await Deno.readTextFile("./file.txt");

const arrOfInputs = input.split("\n").map((each) => each.split(" "));

let score = 0;
const drawPoints = 3;
const winPoints = 6;
const choosedRock = 1;
const choosedPaper = 2;
const choosedScissors = 3;
arrOfInputs.forEach((each) => {
  //________Part 1___________
  switch (each[0]) {
    case "A":
      if (each[1].includes("X")) {
        score += choosedRock + drawPoints;
      } else if (each[1].includes("Y")) {
        score += choosedPaper + winPoints;
      } else {
        score += choosedScissors;
      }
      break;
    case "B":
      if (each[1].includes("X")) {
        score += choosedRock;
      } else if (each[1].includes("Y")) {
        score += choosedPaper + drawPoints;
      } else {
        score += choosedScissors + winPoints;
      }
      break;
    case "C":
      if (each[1].includes("X")) {
        score += choosedRock + winPoints;
      } else if (each[1].includes("Y")) {
        score += choosedPaper;
      } else {
        score += choosedScissors + drawPoints;
      }
      break;

    default:
      break;
  }

  //________Part 2___________
  // switch (each[1][0]) {
  //   case "X":
  //     //need to loose
  //     if (each[0] === "A") {
  //       score += choosedScissors;
  //     } else if (each[0] === "B") {
  //       score += choosedRock;
  //     } else {
  //       score += choosedPaper;
  //     }
  //     break;
  //   case "Y":
  //     //need to draw
  //     if (each[0] === "A") {
  //       score += choosedRock + drawPoints;
  //     } else if (each[0] === "B") {
  //       score += choosedPaper + drawPoints;
  //     } else {
  //       score += choosedScissors + drawPoints;
  //     }
  //     break;
  //   case "Z":
  //     //need to win
  //     if (each[0] === "A") {
  //       score += choosedPaper + winPoints;
  //     } else if (each[0] === "B") {
  //       score += choosedScissors + winPoints;
  //     } else {
  //       score += choosedRock + winPoints;
  //     }
  //     break;

  //   default:
  //     break;
  // }
});
console.log(score);
