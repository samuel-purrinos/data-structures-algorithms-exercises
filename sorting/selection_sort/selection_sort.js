// Legacy version of the SelectionSort algorithm
function selectionSort(arr){
  // Loop over the array
  for(var i = 0; i < arr.length; i++){
      // Assume the first item is the lowest value
      var lowest = i;
      // Loop over the array starting from the next element
      for(var j = i+1; j < arr.length; j++){
          // If any value is lower than the current lowest, update lowest
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
      // If the lowest value is not the initial assumed value, swap it with the initial value
      if(i !== lowest){
          // Swap the values
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
      }
  }
  // Return the sorted array
  return arr;
}

// ES2015 version of the SelectionSort algorithm
function selectionSort(arr) {
// Helper function to swap values in the array
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

// Loop over the array
for (let i = 0; i < arr.length; i++) {
  // Assume the first item is the lowest value
  let lowest = i;
  // Loop over the array starting from the next element
  for (let j = i + 1; j < arr.length; j++) {
    // If any value is lower than the current lowest, update lowest
    if (arr[lowest] > arr[j]) {
      lowest = j;
    }
  }
  // If the lowest value is not the initial assumed value, swap it with the initial value
  if (i !== lowest) swap(arr, i, lowest);
}

// Return the sorted array
return arr;
}

selectionSort([0,2,34,22,10,19,17]);  // This line of code is calling the function with the array [0,2,34,22,10,19,17] and sorts the array in ascending order.

