/* Find the second smallest and second largest element of any arry */

//Optimal Approach - single traversals
//Time - O(n)
//Space - O(n)
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

//Two traversals - first find the largest and smallest and then second largest and smallest
//Time - O(n)
//Space - O(1)
function findSecondOrderElement2(arr, n) {
  if (n < 2) {
    return -1;
  }
  let smallestNum = Infinity;
  let secondSmallestNum = Infinity;
  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    } else if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondSmallestNum && arr[i] !== smallestNum) {
      secondSmallestNum = arr[i];
    }
    if (arr[i] > secondLargestNum && arr[i] !== largestNum) {
      secondLargestNum = arr[i];
    }
  }

  return [secondSmallestNum, secondLargestNum];
}

console.log(findSecondOrderElement2([1, 2, 4, 7, 7, 5], 5));

//Brute force approach - sort the array [get second largest and smallest]
//Time -O(nLogn) - for sorting the array
//Space - O(1)
