// From: https://thedailybyte.dev/ (Day 1)

function reverseString(str) {
  let strArray = str.split('');
  for (let i=0, j=str.length-1; i<str.length/2; i++,j--) {
    strArray[i] = str[j];
    strArray[j] = str[i];
  }

  return strArray.join('');
}

let result = null;
let str = ""

str = "Cat"
result = reverseString(str);
console.log(result === "taC");

str = "The Daily Byte"
result = reverseString(str);
console.log(result === "etyB yliaD ehT");

str = "civic"
result = reverseString(str);
console.log(result === "civic");
