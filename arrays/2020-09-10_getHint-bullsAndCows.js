// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3455/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let A = 0; // bulls
  let B = 0; // cows

  let result = "";

  let remaingGuessDigits = [...guess];
  let remaingSecretDigits = [...secret];

  for (let i=0; i<secret.length; i++) {
    if (secret[i] === guess[i]) {
      A++;
      remaingSecretDigits[i] = undefined;
      remaingGuessDigits[i] = undefined;
    }
  }

  result += `${A}A`

  let position = -1;
  for(let i=0; i<remaingGuessDigits.length; i++) {
    position = remaingSecretDigits.indexOf(remaingGuessDigits[i]);

    if (position !== -1 && remaingGuessDigits[i] !== undefined) {
      B++;
      remaingSecretDigits[position] = undefined;
      remaingGuessDigits[i] = undefined;
    }
  }

  result += `${B}B`

  return result;
};

let result = "";
let secret = "";
let guess = "";

secret = "1807";
guess = "7810";
result = getHint(secret, guess);
console.log('result: ', result);
// Output: "1A3B"

secret = "1123";
guess = "0111";
result = getHint(secret, guess);
console.log('result: ', result);
// Output: "1A1B"

//  Your runtime beats 88.45 % of javascript submissions.
//  Your memory usage beats 82.85 % of javascript submissions.
