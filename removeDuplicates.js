//Find the number of unique element in a sorted array
//Time Complexity : O(n)
//Space Complexity : O(1)
function removeDuplicates(arr, n) {
  let len = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[i + 1]) {
      len++;
    }
  }
  return len;
}

console.log(removeDuplicates([1, 2, 2, 2, 3], 5));

//Two Pointer - used to bring all
function getLength(arr, n) {
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr;
}
console.log(getLength([1, 1, 2], 3));

//Advanced approach: use other data structure as set to get unique element and then length
