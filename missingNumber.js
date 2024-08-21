// function missingNumber(arr, n) {
//   for (let i = 1; i < n; i++) {
//     if (i !== arr[i - 1]) {
//       return arr[i - 1] - 1;
//     }
//   }
// }

//Approach - [sum of all progression (arithmetic progression) - sum of given array element]
function missingNumber(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return sum - arrSum;
}

console.log(missingNumber([1, 2, 4, 5], 5));
