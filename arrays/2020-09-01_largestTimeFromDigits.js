// https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3445/

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {

  let pos = 0;
  let bestOptionsForFirstHour = [2, 1, 0];

  const fn1 = function (bestOptionsForFirstHour) {
    const dupA = [...A];
    let bestFirstHour = 0;
    for (let i = 0; i < bestOptionsForFirstHour.length; i++) {
      pos = dupA.indexOf(bestOptionsForFirstHour[i]);
      if (pos > -1) {
        bestFirstHour = dupA[pos];
        // Remove it
        dupA.splice(pos, 1);
        break;
      }
    }

    // console.log("bestFirstHour: ", bestFirstHour)
    // Return empty string if it was not found
    if (dupA.length > 3) {
      return ""
    }

    let bestSecondHour = 0;
    const bestOptionsForSecondHour = bestFirstHour == 2 ? [3, 2, 1, 0] : [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    for (let i = 0; i < bestOptionsForSecondHour.length; i++) {
      pos = dupA.indexOf(bestOptionsForSecondHour[i]);
      if (pos > -1) {
        bestSecondHour = dupA[pos];
        // Remove it
        dupA.splice(pos, 1);
        break;
      }
    }

    // console.log("bestSecondHour: ", bestSecondHour)
    // Return empty string if it was not found
    if (dupA.length > 2) {
      return ""
    }

    let bestFirstMinute = 0;
    const bestOptionsForFirstMinute = [5, 4, 3, 2, 1, 0];
    for (let i = 0; i < bestOptionsForFirstMinute.length; i++) {
      pos = dupA.indexOf(bestOptionsForFirstMinute[i]);
      if (pos > -1) {
        bestFirstMinute = dupA[pos];
        // Remove it
        dupA.splice(pos, 1);
        break;
      }
    }

    // console.log("bestFirstMinute: ", bestFirstMinute)
    // Return empty string if it was not found
    if (dupA.length > 1) {
      return ""
    }

    const bestSecondMinute = dupA[0];

    return bestFirstHour.toString() + bestSecondHour.toString() + ":" + bestFirstMinute.toString() + bestSecondMinute.toString();
  }


  let result = "";
  result = fn1(bestOptionsForFirstHour);
  // console.log("result: ", result);

  if (result == "") {
    bestOptionsForFirstHour = [0, 1, 2];
    result = fn1(bestOptionsForFirstHour);
  }

  // console.log("result: ", result);
  return result;
};

const a2 = [2,0,6,6]
const res = largestTimeFromDigits(a2);
console.log(res);

/*
Leetcode results:
Your runtime beats 10.75 % of javascript submissions.
*/