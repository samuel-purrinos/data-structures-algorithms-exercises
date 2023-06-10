// Merge function
function merge(arr1, arr2){
    // Create an empty array, take a look at the smallest values in each input array
    let results = [];
    let i = 0;
    let j = 0;
    
    // While there are still values we haven't looked at...
    while(i < arr1.length && j < arr2.length){
        // If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            // If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
            results.push(arr2[j])
            j++;
        }
    }
    
    // We will still have values we haven't looked at in one of our input arrays, so we concatenate them onto the end of our results
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    
    // return the merged array
    return results;
}

// Recursive Merge Sort
function mergeSort(arr){
    // Base case: if the array has a length of 0 or 1, there's nothing to sort
    if(arr.length <= 1) return arr;
    
    // Split the array into two halves
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    
    // Merge the sorted halves
    return merge(left, right);
}

mergeSort([10,24,76,73])  // This line of code is calling the function with the array [10,24,76,73] and sorts the array in ascending order.

