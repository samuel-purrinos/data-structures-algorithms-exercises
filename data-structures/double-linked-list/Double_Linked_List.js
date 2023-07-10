// Define Node class
class Node {
    constructor(val) {
        this.val = val; // Node's value
        this.next = null; // Reference to next Node
        this.prev = null; // Reference to previous Node
    }
}

// Define DoublyLinkedList class
class DoublyLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.tail = null; // Tail of the list
        this.length = 0; // Length of the list
    }

    // Add a Node to the end of the list
    push(val) {
        var newNode = new Node(val); // Create a new Node
        // If list is empty, the new Node is both the head and tail
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link new Node to the list
            this.tail.next = newNode; 
            newNode.prev = this.tail;
            // Make the new Node as tail
            this.tail = newNode;
        }
        // Increment length of the list
        this.length++;
        // Return the updated list
        return this;
    }

    // Remove a Node from the end of the list
    pop() {
        if (!this.head) return undefined; // If the list is empty, nothing to pop
        var poppedNode = this.tail; // Node to be popped
        // If only one Node in the list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update tail and remove links of poppedNode
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        // Decrement length of the list
        this.length--;
        // Return the removed Node
        return poppedNode;
    }

    // Remove a Node from the beginning of the list
    shift() {
        if (this.length === 0) return undefined; // If list is empty, nothing to shift
        var oldHead = this.head; // Node to be shifted
        // If only one Node in the list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update head and remove links of oldHead
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        // Decrement length of the list
        this.length--;
        // Return the removed Node
        return oldHead;
    }

    // Add a Node to the beginning of the list
    unshift(val) {
        var newNode = new Node(val); // Create a new Node
        // If list is empty, the new Node is both the head and tail
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Link new Node to the list
            this.head.prev = newNode;
            newNode.next = this.head;
            // Make new Node as the head
            this.head = newNode;
        }
        // Increment length of the list
        this.length++;
        // Return the updated list
        return this;
    }

    // Get a Node by its position
    get(index) {
        // If index is out of bounds, return null
        if (index < 0 || index >= this.length) return null;
        var count, current;
        // If index is in the first half of the list
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            // Traverse from head to desired index
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            // If index is in the second half of the list
            count = this.length - 1;
            current = this.tail;
            // Traverse from tail to desired index
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        // Return the found Node
        return current;
    }

    // Set a Node's value by its position
    set(index, val) {
        var foundNode = this.get(index); // Get Node at the given index
        if (foundNode != null) {
            // If Node exists, update its value
            foundNode.val = val;
            return true;
        }
        // If Node doesn't exist, return false
        return false;
    }

    // Insert a Node at a specific position
    insert(index, val) {
        // If index is out of bounds, return false
        if (index < 0 || index > this.length) return false;
        // If index is 0, use unshift method
        if (index === 0) return !!this.unshift(val);
        // If index is at the end, use push method
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val); // Create a new Node
        var beforeNode = this.get(index - 1); // Get Node before the given index
        var afterNode = beforeNode.next; // Get Node after the given index

        // Link new Node between beforeNode and afterNode
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        // Increment length of the list
        this.length++;
        // Return true as insertion is successful
        return true;
    }

    // Remove a Node at a specific position
    remove(index) {
        // If index is out of bounds, return undefined
        if (index < 0 || index >= this.length) return undefined;
        // If index is 0, use shift method
        if (index === 0) return this.shift();
        // If index is at the end, use pop method
        if (index === this.length - 1) return this.pop();
        var removedNode = this.get(index); // Get Node at the given index
        var beforeNode = removedNode.prev; // Get Node before the given index
        var afterNode = removedNode.next; // Get Node after the given index

        // Link beforeNode and afterNode together, bypassing removedNode
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // Remove links of removedNode
        removedNode.next = null;
        removedNode.prev = null;
        // Decrement length of the list
        this.length--;
        // Return the removed Node
        return removedNode;
    }
}

// Create a new DoublyLinkedList
var list = new DoublyLinkedList();
// Add "Harry", "Ron", and "Hermione" to the list
list.push("Harry");
list.push("Ron");
list.push("Hermione");
