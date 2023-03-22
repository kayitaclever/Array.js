function ArrayMergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
    return mergeArray(ArrayMergeSort(left), ArrayMergeSort(right));
  }
  function mergeArray(leftElement, rightElement) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftElement.length && rightIndex < rightElement.length) {
      if (leftElement[leftIndex] < rightElement[rightIndex]) {
        result.push(leftElement[leftIndex]);
        leftIndex++;
      }
      else {
        result.push(rightElement[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(leftElement.slice(leftIndex)).concat(rightElement.slice(rightIndex)); }

    let num=[45,12,6,89,2,5]

    const sortedArray = ArrayMergeSort(num);
console.log("The Sorted Array: ", sortedArray)


function binary(sortedArray,target){
    let left =0;
    let right=sortedArray.length-1;
    while(left<=right){
        let middle =Math.floor((left+right)/2);
        if(num[middle]=== target){
            return middle
        }
        else if(sortedArray[middle]>target){     // if (num[middle]<target){
                                           // left=middle+1                                                                                                                                                                                                                                                                                  
                                            // }
            right =middle -1;
        }
        else {
            left= middle+1;
        }
    }
    return null;
    
}
const target = 5;
let arr3=(sortedArray, target);
console.log(binary(sortedArray,target))



function ArrayMergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  const right = array.slice(middle);
  return mergeArray(ArrayMergeSort(left), ArrayMergeSort(right));
}
function mergeArray(leftElement, rightElement) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftElement.length && rightIndex < rightElement.length) {
    if (leftElement[leftIndex] < rightElement[rightIndex]) {
      result.push(leftElement[leftIndex]);
      leftIndex++;
    }
    else {
      result.push(rightElement[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(leftElement.slice(leftIndex)).concat(rightElement.slice(rightIndex)); }
   
   

 // Given an unsorted array of numbers return the sorted array in descending order.
function ArrayMergeSort1(array1) {
  if (array1.length <= 1) {
    return array1;
  }
  let middle1 = Math.floor(array1.length / 2);
  let left1 = array1.slice(0, middle1);
  const right1 = array1.slice(middle1);
  return mergeArray1(ArrayMergeSort1(left1), ArrayMergeSort1(right1));
}
function mergeArray1(leftElement1, rightElement1) {
  let result1 = [];
  let leftIndex1 = 0;
  let rightIndex1 = 0;
  while (leftIndex1 < leftElement1.length && rightIndex1 < rightElement1.length) {
    if (leftElement1[leftIndex1] > rightElement1[rightIndex1]) {
      result1.push(leftElement1[leftIndex1]);
      leftIndex1++;
    }
    else {
      result1.push(rightElement1[rightIndex1]);
      rightIndex1++;
    }
  }
  return result1.concat(leftElement1.slice(leftIndex1)).concat(rightElement1.slice(rightIndex1));
}
let arr=[123,89,5,23,9,56]
const sortedArray1 = ArrayMergeSort1(arr);
//consoling the sorted array in descending order
console.log("the sorted array in descending order: ", sortedArray1)
// Given the following array, search for the following target
function ArrayMergeSort3(array3) {
  if (array3.length <= 1) {
    return array3;
  }
  let middle3 = Math.floor(array3.length / 2);
  let left3 = array3.slice(0, middle3);
  const right3 = array3.slice(middle3);
  return mergeArray3(ArrayMergeSort3(left3), ArrayMergeSort3(right3));
}
function mergeArray3(leftElement3, rightElement3) {
  let result3 = [];
  let leftIndex3 = 0;
  let rightIndex3 = 0;
  while (leftIndex3 < leftElement3.length && rightIndex3 < rightElement3.length) {
    if (leftElement3[leftIndex3] < rightElement3[rightIndex3]) {
      result3.push(leftElement3[leftIndex3]);
      leftIndex3++;
    }
    else {
      result3.push(rightElement3[rightIndex3]);
      rightIndex3++;
    }
  }
  return result3.concat(leftElement3.slice(leftIndex3)).concat(rightElement3.slice(rightIndex3));
}
let arr2 = [1,4,78,2,67,3];
const sortedArray3 = ArrayMergeSort3(arr2);
function binarySearch3(array3, target3) {
  let leftIndex3 = 0;
  let rightIndex3 = array3.length - 1;
  while (leftIndex3 <= rightIndex3) {
    const midIndex3 = Math.floor((leftIndex3 + rightIndex3) / 2);
    if (array3[midIndex3] === target3) {
      return midIndex;
    }
    else if (array3[midIndex3] < target3) {
      leftIndex3 = midIndex3 + 1;
    }
    else {
      rightIndex3 = midIndex3 - 1;
    }
  }
  return -1;
}
const target3 = 34;
const targetIndex3 = binarySearch3(sortedArray3, target3);
console.log("The target element ",targetIndex3);
