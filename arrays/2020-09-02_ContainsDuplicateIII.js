// Problem from: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3446/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i=0; i<nums.length; i++) {
    for(let j=0; j<nums.length; j++) {
      if (i === j) {
          continue;
      }

      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i-j) <= k) {
          return true
      }
    }
  }

  return false;
};

let nums = [];
let res = false;

nums = [1,0,1,1];
k = 1;
t = 2;
res = containsNearbyAlmostDuplicate(nums, k, t)
console.log('res: ', res);

nums = [1,5,9,1,5,9];
k = 2;
t = 3;
res = containsNearbyAlmostDuplicate(nums, k, t)
console.log('res: ', res);

// Leetcode result:  Your runtime beats 9.87 % of javascript submissions.
