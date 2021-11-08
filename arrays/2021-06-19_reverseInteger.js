// https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {

  let s = x.toString()

  let newString = '';

  for (let i = s.length - 1; i >= 0; i--) {
    newString = `${newString}${s[i]}`
  }

  const answer = parseInt(newString)

  // Check limit
  if (answer < Math.pow(-2, 31) || answer > (Math.pow(2, 31) - 1)) {
    return 0;
  }

  return answer;
};

x = 123

reverse(x)
