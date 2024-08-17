# Data Structure and Algorithms - JavaScript

<details>
<summary><b> Largest/Smallest number in an array</b> </summary>

- Find the largest or smallest in an array

```js
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
```

</details>

<details>
<summary><b>Second Order Elements in an array</b> </summary>

- Find the second smallest and second largest element in an array

```js
function secondOrderElement(arr, n) {
  //n is number of unique elements
  if (n < 2) {
    return -1;
  }
  let largeNum = -Infinity;
  let smallNum = Infinity;
  let secondLargeNum = -Infinity;
  let secondSmallNum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      secondSmallNum = smallNum;
      smallNum = arr[i];
    } else if (arr[i] < secondSmallNum && arr[i] !== smallNum) {
      secondSmallNum = arr[i];
    }

    if (arr[i] > largeNum) {
      secondLargeNum = largeNum;
      largeNum = arr[i];
    } else if (arr[i] > secondLargeNum && arr[i] !== largeNum) {
      secondLargeNum = arr[i];
    }
  }

  return [secondSmallNum, secondLargeNum];
}

console.log(secondOrderElement([1, 2, 4, 7, 7, 5], 5));
```
