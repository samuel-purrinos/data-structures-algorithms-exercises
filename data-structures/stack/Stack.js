// Start by creating a Node class which will be used to create new nodes in the stack.
class Node {
    constructor(value){
        // Each node will have a value and a reference (next) to the next node in the stack.
        // When a new node is created, the "next" property will be null until it's linked to another node.
        this.value = value;
        this.next = null;
    }
}

// Create a Stack class.
class Stack {
    constructor(){
        // The constructor function initializes the top (first) and bottom (last) of the stack to null, and sets the size of the stack to 0.
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // The push method adds a new node to the top of the stack.
    push(val){
        // Create a new node with the given value.
        var newNode = new Node(val);
        // If the stack is empty, set both the top and bottom of the stack to be the new node.
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // Otherwise, set the "next" property on the new node to be the current top node and then set the new node to be the new top.
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        // Increment the size and return the new size of the stack.
        return ++this.size;
    }
    // The pop method removes a node from the top of the stack and returns its value.
    pop(){
        // If there are no nodes in the stack, return null.
        if(!this.first) return null;
        // Save the current top node in a temporary variable.
        var temp = this.first;
        // If there's only one node in the stack, set the bottom (last) to be null.
        if(this.first === this.last){
            this.last = null;
        }
        // Set the top of the stack to be the next node. The old top node will now have no references to it and it will be removed from memory.
        this.first = this.first.next;
        // Decrement the size of the stack.
        this.size--;
        // Return the value of the node removed.
        return temp.value;
    }
}
