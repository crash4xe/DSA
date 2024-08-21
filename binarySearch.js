function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  if (n > arr[right] || n < arr[left]) {
    return -1;
  }

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    //mid = Math.round((right + left) / 2);
    if (arr[mid] == n) {
      return n;
    } else if (n > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 6], 4));

//Time complexity: O(logN)
//Space complexity: O(1)
