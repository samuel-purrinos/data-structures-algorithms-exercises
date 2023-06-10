// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  // Initialize noSwaps, which we will use to optimize our sort.
  // If we go through a whole pass without having to swap any elements, we know the array is already sorted.
  var noSwaps;
  
  // Outer loop is responsible for the number of passes through the array. We start at the end and move towards the start.
  for(var i = arr.length; i > 0; i--){
    // At the beginning of each pass, we set noSwaps to true.
    noSwaps = true;
    
    // Inner loop is responsible for the individual comparisons and swaps on each pass.
    for(var j = 0; j < i - 1; j++){
      // If the current element is greater than the next element, we need to swap them.
      if(arr[j] > arr[j+1]){
        // We use a temporary variable to hold the value of the current element,
        // so we can swap the values of the current and next element.
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
        // Since we had to swap two elements, we set noSwaps to false.
        noSwaps = false;         
      }
    }
    
    // If no two elements were swapped in the last pass, we can break out of the loop early.
    if(noSwaps) break;
  }
  
  // Return the sorted array.
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);  // This line of code is calling the function with the array [8,1,2,3,4,5,6,7] and sorts the array in ascending order.
