function insertionSort(arr){
	// Initialize currentVal, which will be the value we are currently trying to find the correct place for.
	var currentVal;
	
    // Outer loop starts at the second element and moves through the array. Each element it touches is the 'new' element that we are inserting into the sorted portion of the array.
    for(var i = 1; i < arr.length; i++){
        // We store the value of the element we are checking in currentVal
        currentVal = arr[i];
        
        // Inner loop starts at the element before the current one, and moves backwards through the array.
        // It continues as long as the current element is smaller than the element we are comparing to.
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // If the current element is smaller, we shift the compared element up one position in the array.
            arr[j+1] = arr[j]
        }
        
        // Once we find an element that is not larger than the current element, or we reach the start of the array,
        // we insert the current element into its correct position.
        arr[j+1] = currentVal;
    }
    
    // Return the sorted array.
    return arr;
}

insertionSort([2,1,9,76,4])  // This line of code is calling the function with the array [2,1,9,76,4] and sorts the array in ascending order.
