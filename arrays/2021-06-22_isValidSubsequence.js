function isValidSubsequence(array, sequence) {
  // Write your code here.

  if (sequence.length > array.length) {
    return false;
  }

  let sequencePosition = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[sequencePosition]) {
      sequencePosition += 1;
    }
  }

  console.log('sequencePosition: ', sequencePosition);

  if (sequencePosition !== 0 && sequencePosition === sequence.length) {
    return true;
  }

  return false;

}



array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10]

res = isValidSubsequence(array, sequence)
console.log(res);
