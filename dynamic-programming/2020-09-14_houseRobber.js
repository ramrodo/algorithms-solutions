// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3459/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max_gold = [];
  max_gold[0] = nums[0];

  for (let i=1; i<nums.length; i++) {
    max_gold[i] = Math.max((max_gold[i-2] || 0) + nums[i], max_gold[i-1] || 0)
    // 1+3 or 2 => 1+3
    // max_gold[1, 4]
    // 4+1 or 4
    console.log('max_gold: ', max_gold);
  }

  return max_gold[max_gold.length-1];
};

let result = '';
let nums = [];

nums = [1,2,3,1];
result = rob(nums);
console.log('result: ', result);
// [1]
// => max_gold[1]
// [1,2] --> keep 2
// => max_gold[1,2]
// [*1,2,*3] => 2 or 3+1
// => max_gold[1,2,4]
// [1,2,3,1] 4



nums = [2,7,9,3,1];
result = rob(nums);
console.log('result: ', result);
// [2]
// => max_gold[2]
// [2,7] --> keep 7
// => max_gold[2,7]
// [2*,7,9*] => 2+9 or 7
// => max_gold[2,7,11]
// [2*,7,9*,3] => 11 (A)
// or [2,7?,9,3?] => 10
// => max_gold[2,7 (B),11 (A),11]
// [2*,7,9*,3,1*] (A) + 1
// or [2*,7,9,3,1] 
