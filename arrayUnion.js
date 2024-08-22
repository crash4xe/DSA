//Union of sorted array - distinct and common elements
//Time complexity: O(sum of both array size)
//Space complexity: O(sum of both array size)
function arrayUnion(a, b) {
  let newArr = new Set();
  let i = 0;
  let j = 0;
  //loop through both adding distinct and common elements
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      newArr.add(a[i]);
      i++;
    } else if (a[i] > b[j]) {
      newArr.add(b[j]);
      j++;
    }
  }

  //add left over elements
  while (i < a.length) {
    newArr.add(a[i]);
    i++;
  }
  //add left over elements
  while (j < j.length) {
    newArr.add(b[j]);
    j++;
  }

  return newArr;
}

console.log(arrayUnion([1, 2, 3, 4, 6], [2, 3, 5]));

//we can use array instead of set. for array we need to check the last element not equal to current item or array is not empty - then add current item
