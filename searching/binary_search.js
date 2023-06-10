// Original Solution
function binarySearch(arr, elem) {
    // We start by initializing our pointers: start, end, and middle.
    var start = 0;  // start will always point to the start of the portion of the array we are considering
    var end = arr.length - 1;  // end will always point to the end of the portion of the array we are considering
    var middle = Math.floor((start + end) / 2);  // middle is the index in the middle of the portion of the array we are considering

    // We will keep searching as long as the middle element is not the one we are looking for and the start is less than or equal to the end
    while(arr[middle] !== elem && start <= end) {
        // If the element we are looking for is less than the middle element, we know it must be in the left half of the array, so we move our end pointer to the middle - 1
        if(elem < arr[middle]){
            end = middle - 1;
        } else { // Otherwise, it must be in the right half, so we move our start pointer to the middle + 1
            start = middle + 1;
        }
        // We then recalculate the middle index based on our new start and end pointers
        middle = Math.floor((start + end) / 2);
    }
    // If the middle element is the one we are looking for, we return its index, otherwise we return -1 indicating that the element is not in the array
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    // This version uses a ternary operator to return the result. If the middle element is the one we are looking for, it returns its index, otherwise it returns -1.
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)  // This line of code is calling the function with the array [2,5,6,9,13,15,28,30] and searching for the element 103.

