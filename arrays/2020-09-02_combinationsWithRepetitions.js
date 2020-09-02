// Code from: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/combinations/combineWithRepetitions.js

/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
function combineWithRepetitions(comboOptions, comboLength) {
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  // Init combinations array.
  const combos = [];

  // Remember characters one by one and concatenate them to combinations of smaller lengths.
  // We don't extract elements here because the repetitions are allowed.
  comboOptions.forEach((currentOption, optionIndex) => {
    // Generate combinations of smaller size.
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(optionIndex),
      comboLength - 1,
    );

    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}

const comboOptions = [1,2,3,1];
const comboLength = 2;

// Repetitions number itself
res = combineWithRepetitions(comboOptions, comboLength);
console.log('res: ', res);