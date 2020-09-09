// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3454/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');

  let winner = 0;

  for (let i=0; i<Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] === undefined && arr2[i] !== undefined) {
      if (parseInt(arr2[i]) !== 0 && winner !== 1) {
        winner = -1;
      }
      continue;
    }

    if (arr1[i] !== undefined && arr2[i] === undefined) {
      if (parseInt(arr1[i]) !== 0 && winner !== -1) {
        winner = 1;
      }
      continue;
    }

    if ((parseInt(arr1[i]) > parseInt(arr2[i])) && (winner !== -1)) {
      winner = 1;
      continue;
    }

    if ((parseInt(arr1[i]) < parseInt(arr2[i])) && (winner !== 1)) {
      winner = -1;
      continue;
    }
  }

  return winner;
};


let result = 0;
let version1 = "";
let version2 = "";

version1 = "0.1";
version2 = "1.1";
result = compareVersion(version1, version2);
console.log('result: ', result);

version1 = "1.0.1";
version2 = "1";
result = compareVersion(version1, version2);
console.log('result: ', result);

version1 = "7.5.2.4";
version2 = "7.5.3";
result = compareVersion(version1, version2);
console.log('result: ', result);

version1 = "1.01";
version2 = "1.001";
result = compareVersion(version1, version2);
console.log('result: ', result);

version1 = "1.0";
version2 = "1.0.0";
result = compareVersion(version1, version2);
console.log('result: ', result);

version1 = "0.1";
version2 = "1.0";
result = compareVersion(version1, version2);
console.log('result: ', result);

//  Your runtime beats 64.72 % of javascript submissions.


/**
 * Better solution:

var compareVersion = function(version1, version2) {
    let arr1= version1.split('.')
    let arr2= version2.split('.')
    let len = Math.max(arr1.length,arr2.length)

    for(let i=0;i<len;i++){
        let data1=0
        let data2=0

        if(i<arr1.length){
            data1=parseInt(arr1[i])
        }
        if(i<arr2.length){
            data2=parseInt(arr2[i])
        }
        if(data1<data2){
            return -1
        }else if (data2<data1){
            return 1
        }
    }
    return 0
};

 */

