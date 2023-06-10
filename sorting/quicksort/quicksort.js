// The pivot function is helping to implement the QuickSort.
function pivot(arr, start = 0, end = arr.length - 1) {
  // Swap is a helper function for swapping array elements
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  // Start from the element next to the pivot and go up to the end of the array
  for (let i = start + 1; i <= end; i++) {
    // If the pivot is greater than the current element, increment the swap index and swap the current element with the element at the swap index
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot element with the final swap index
  swap(arr, start, swapIdx);
  
  // Return the final pivot index
  return swapIdx;
}

// QuickSort function
function quickSort(arr, left = 0, right = arr.length -1){
    // Only run if left pointer is less than right pointer
    if(left < right){
        // Get the index of the sorted pivot
        let pivotIndex = pivot(arr, left, right)
        // Recursively call quick sort on the left part of the array (from left to pivot index - 1)
        quickSort(arr,left,pivotIndex-1);
        // Recursively call quick sort on the right part of the array (from pivot index + 1 to right)
        quickSort(arr,pivotIndex+1,right);
    }
    
    // Return the sorted array
    return arr;
} 

quickSort([100,-3,2,4,6,9,1,2,5,3,23])  // This line of code is calling the function with the array [100,-3,2,4,6,9,1,2,5,3,23] and sorts the array in ascending order.





// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




