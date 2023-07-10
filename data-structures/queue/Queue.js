// Start by creating a Node class which will be used to create new nodes in the queue.
class Node {
    constructor(value){
        // Each node will have a value and a reference (next) to the next node in the queue.
        // When a new node is created, the "next" property will be null until it's linked to another node.
        this.value = value;
        this.next = null;
    }
}

// Create a Queue class.
class Queue {
    constructor(){
        // The constructor function initializes the front (first) and back (last) of the queue to null, and sets the size of the queue to 0.
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // The enqueue method adds a new node to the back of the queue.
    enqueue(val){
        // Create a new node with the given value.
        var newNode = new Node(val);
        // If the queue is empty, set both the front and back of the queue to be the new node.
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // Otherwise, set the "next" property on the current back node to be the new node and then set the new node to be the new back.
            this.last.next = newNode;
            this.last = newNode;
        }
        // Increment the size and return the new size of the queue.
        return ++this.size;
    }
    // The dequeue method removes a node from the front of the queue and returns its value.
    dequeue(){
        // If there are no nodes in the queue, return null.
        if(!this.first) return null;
        // Save the current front node in a temporary variable.
        var temp = this.first;
        // If there's only one node in the queue, set the back (last) to be null.
        if(this.first === this.last) {
            this.last = null;
        }
        // Set the front of the queue to be the next node. The old front node will now have no references to it and it will be removed from memory.
        this.first = this.first.next;
        // Decrement the size of the queue.
        this.size--;
        // Return the value of the node removed.
        return temp.value;
    }
}
