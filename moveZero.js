//Move all zeroes to end of the array
//Time Complexity : O(n)
//Space Complexity : O(1)

function moveZero1(arr, n) {
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] === 0 && arr[j] !== 0) {
      arr[i] = arr[j];
      arr[j] = 0;
    } else if (arr[i] === 0 && arr[j] === 0) {
      continue;
    }
    i++;
  }
  return arr;
}
console.log(moveZero1([4, 0, 3, 2, 5], 5));

//leetcode - beats 95%
