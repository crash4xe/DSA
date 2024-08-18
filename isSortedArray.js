//Check if the array is sorted
//Time complexity: O(n)
//Space complexity: O(1)
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 1, 2, 3]));

//Brute Force approach
//check each elements with it's next element if it is smaller or not
//Time complexity: O(n^2)
//Space complexity: O(1)
