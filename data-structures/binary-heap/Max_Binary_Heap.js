// The MaxBinaryHeap class represents a Max Binary Heap data structure. 
// In a Max Binary Heap, parent nodes always contain a larger value than their children.
class MaxBinaryHeap {
    constructor(){
        // This array will store the values in our heap.
        this.values = [];
    }
    // The insert method adds a new value to the heap in the correct position.
    insert(element){
        // Add the new element to the end of the array.
        this.values.push(element);
        // Move the element up the heap until it's in the correct position.
        this.bubbleUp();
    }
    // The bubbleUp method moves a value up the heap until it's in the correct position.
    bubbleUp(){
        // Start with the last value in the array.
        let idx = this.values.length - 1;
        // This is the value that will be moved up the heap.
        const element = this.values[idx];
        // Continue until the value is in the correct position.
        while(idx > 0){
            // Find the parent's index and value.
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            // If the parent's value is greater than or equal to the current value, we're done.
            if(element <= parent) break;
            // Otherwise, swap the parent's value with the current value.
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Continue with the parent value in the next iteration.
            idx = parentIdx;
        }
    }
}

// Here we create a new MaxBinaryHeap and insert several values.
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55); // This value will end up as the root of the heap, because it's the largest.
