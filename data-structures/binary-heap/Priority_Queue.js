// The Node class represents an element in the priority queue.
// Each node has a value and a priority. 
// Nodes with high priorities are dequeued before nodes with low priorities.
class Node {
    constructor(val, priority){
        // The value that the node stores.
        this.val = val;
        // The priority of the node. Lower numbers indicate higher priorities.
        this.priority = priority;
    }
}

// The PriorityQueue class represents a priority queue data structure.
class PriorityQueue {
    constructor(){
        // This array stores the nodes in the queue.
        this.values = [];
    }
    // The enqueue method adds a node to the queue in the correct position based on its priority.
    enqueue(val, priority){
        // Create a new node.
        let newNode = new Node(val, priority);
        // Add the new node to the end of the queue.
        this.values.push(newNode);
        // Rearrange the queue so that the node is in the correct position based on its priority.
        this.bubbleUp();
    }
    // The bubbleUp method moves a node up in the queue until it's in the correct position based on its priority.
    bubbleUp(){
        // Start with the last node in the queue.
        let idx = this.values.length - 1;
        // This is the node that will be moved up in the queue.
        const element = this.values[idx];
        // Continue until the node is in the correct position.
        while(idx > 0){
            // Find the parent node.
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            // If the node's priority is not higher than its parent's, we're done.
            if(element.priority >= parent.priority) break;
            // Otherwise, swap the node with its parent.
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Continue with the parent node in the next iteration.
            idx = parentIdx;
        }
    }
    // The dequeue method removes and returns the node with the highest priority.
    dequeue(){
        // The node with the highest priority is at the beginning of the array.
        const min = this.values[0];
        // Remove the last node.
        const end = this.values.pop();
        // If there are still nodes left, replace the first node with the one at the end, then rearrange the queue.
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        // Return the node with the highest priority.
        return min;
    }
    // The sinkDown method moves a node down in the queue until it's in the correct position based on its priority.
    sinkDown(){
        // Start with the first node in the queue.
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        // Continue until the node is in the correct position.
        while(true){
            // Find the child nodes.
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            // If the left child node exists, and its priority is higher than the node's, plan to swap with the left child.
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            // If the right child node exists...
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                // And if the node should be swapped with the right child instead of the left child, plan to swap with the right child.
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            // If no swap is planned, the node is in the correct position, so we're done.
            if(swap === null) break;
            // Otherwise, swap the node with the child node, and continue with the child node in the next iteration.
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

// Here we create a new PriorityQueue and enqueue several nodes with different priorities.
let ER = new PriorityQueue();
ER.enqueue("common cold",5) // This has the lowest priority.
ER.enqueue("gunshot wound", 1) // This has the highest priority.
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
