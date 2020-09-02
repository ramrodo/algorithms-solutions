// Code from: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations/combineWithoutRepetitions.js

/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
function combineWithoutRepetitions(comboOptions, comboLength) {
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption, optionIndex) => {
    // Generate combinations of smaller size.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1,
    );
    // console.log('smallerCombos: ', smallerCombos);

    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      console.log('smallerCombo: ', smallerCombo);
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}

let comboOptions = [1,2,3,1];
let comboLength = 2;
let res = [];

comboOptions = [1,2,3,1,6,5,4];
comboLength = 2;
res = combineWithoutRepetitions(comboOptions, comboLength);
console.log('length: ', res.length);
console.log('res: ', res);

// More options
// comboOptions = [1,2,3,1,4,5,7,5,8];
// comboLength = 2;
// res = combineWithoutRepetitions(comboOptions, comboLength);
// console.log('res: ', res);

// More length
// comboOptions = [1,2,3,4,5];
// comboLength = 3;
// res = combineWithoutRepetitions(comboOptions, comboLength);
// console.log('length: ', res.length);
// console.log('res: ', res);

// Entre más comboLength, más combinaciones
