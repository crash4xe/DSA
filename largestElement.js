/* Find the largest element in array */

//Recursive Approach
//Time complexity: O(n)
//Space complexity: O(1)
function findLargestElement(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(findLargestElement([1, 2, 3, 4, 5]));

//Brute Force approach - sort the array and get the value
// Time Complexity: O(N*log(N))
// Space Complexity: O(n)

function findSmallestElement(arr) {
  let smallNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
  }
  return smallNum;
}

//to find smallest and largest element we have built in functions [Math.Max, Math.Min in JS].
