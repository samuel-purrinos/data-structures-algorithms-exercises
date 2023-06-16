// Function to get the digit at a given place in a number
function getDigit(num, i) {
  // Math.abs(num) returns the absolute value of the number
  // Math.pow(10, i) returns 10 raised to the power i
  // The division gives the number shifted i places to the right
  // Math.floor() rounds down to the nearest whole number, removing any decimal part
  // Finally, % 10 gets the last digit of this number
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to count the number of digits in a number
function digitCount(num) {
  // If the number is 0, it has 1 digit
  if (num === 0) return 1;
  // Math.log10() gives the base 10 logarithm of the number
  // Math.abs() makes sure we're taking the logarithm of a positive number
  // Math.floor() rounds down to the nearest whole number, giving the number of digits minus 1
  // Finally, we add 1 to get the number of digits
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to get the maximum number of digits in a list of numbers
function mostDigits(nums) {
  // Initialize the maximum number of digits to 0
  let maxDigits = 0;
  // Loop over each number in the list
  for (let i = 0; i < nums.length; i++) {
    // Update maxDigits to be the maximum of the current maxDigits and the number of digits in the current number
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  // Return the maximum number of digits
  return maxDigits;
}

// Radix sort function
function radixSort(nums){
    // Get the maximum number of digits in the list
    let maxDigitCount = mostDigits(nums);
    // Loop over each place value up to maxDigitCount
    for(let k = 0; k < maxDigitCount; k++){
        // Create an array of 10 empty arrays (one for each digit 0-9)
        let digitBuckets = Array.from({length: 10}, () => []);
        // Loop over each number in the list
        for(let i = 0; i < nums.length; i++){
            // Get the digit at the kth place in the number
            let digit = getDigit(nums[i],k);
            // Add the number to the corresponding bucket
            digitBuckets[digit].push(nums[i]);
        }
        // Flatten the array of buckets into a single array, overwriting nums
        // This effectively sorts the numbers by the kth digit
        nums = [].concat(...digitBuckets);
    }
    // Return the sorted array
    return nums;
}

radixSort([23,345,5467,12,2345,9852]);  // This line of code is calling the function with the array [23,345,5467,12,2345,9852] and sorts the array in ascending order.









