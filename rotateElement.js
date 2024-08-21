//Rotate array to left by one position
function rotateArray(arr, n) {
  let first = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = first;

  return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 5));

//Loop approach - not optimal for large array and postion(k)
function rotateArray1(arr, k) {
  while (k > 0) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = last;
    k--;
  }
  return arr;
}
console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 3));

//cheap approach
function rotateArray2(arr, n) {
  console.log(arr.slice(-n).concat(arr.slice(0, -n)));

  console.log(3 % 7);
}

rotateArray2([1, 2, 3, 4, 5, 6, 7], 3);

//Optimal approach

function rotateArray3(arr, k) {
  k = arr.length % k;
  let rotatedArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    rotatedArr[(i + k) % arr.length] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = rotatedArr[i];
  }

  return arr;
}
console.log(rotateArray3([1, 2, 3, 4, 5, 6, 7], 3));
