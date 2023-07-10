// Create a new Node class that will be the building block of the singly linked list.
class Node{
    constructor(val){
        // The constructor function takes a value, and each node will hold this value and a reference (next) to the next node in the list.
        this.val = val;
        this.next = null;
    }
}

// Create a Singly Linked List class.
class SinglyLinkedList{
    constructor(){
        // The constructor function initializes the head and tail of the list to null, and sets the length of the list to 0.
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // The push method adds a new node to the end of the list.
    push(val){
        var newNode = new Node(val);
        // If the list is empty, set the head and tail to be the new node.
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // The pop method removes a node from the end of the list.
    pop(){
        // If there are no nodes in the list, return undefined.
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        // Loop through the list until you reach the tail.
        while(current.next){
            newTail = current;
            current = current.next;
        }
        // Set the next property of the 2nd to last node to be null and the tail to be the 2nd to last node.
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // If the list is now empty, reset head and tail to null.
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // The shift method removes a node from the beginning of the list.
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        // Set the head property to be the current head's next property.
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    // The unshift method adds a new node to the beginning of the list.
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        // Otherwise, set the newly created node's next property to be the current head property on the list.
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // The get method retrieves a node by its position in the linked list.
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        // Loop through the list until reach the index and return the node at that specific index.
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    // The set method changes the value of a node based on its position in the linked list.
    set(index, val){
        var foundNode = this.get(index);
        // Use the get method to find the specific node and then update the value of that node with the new value.
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // The insert method adds a node to the linked list at a specific position.
    insert(index, val){
        // If the index is less than zero or greater than the length of the list, return false.
        if(index < 0 || index > this.length) return false;
        // If the index is the same as the length, push a new node to the end of the list.
        if(index === this.length) return !!this.push(val);
        // If the index is 0, unshift a new node to the start of the list.
        if(index === 0) return !!this.unshift(val);
        
        // Otherwise, use the get method to access the node at the index - 1.
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        // Set the next property on that node to be the new node.
        prev.next = newNode;
        // Set the next property on the new node to be the previous next.
        newNode.next = temp;
        this.length++;
        return true;
    }

    // The remove method removes a node from the linked list at a specific position.
    remove(index){
        // If the index is less than zero or greater than the length of the list, return undefined.
        if(index < 0 || index >= this.length) return undefined;
        // If the index is 0, shift a node from the start of the list.
        if(index === 0) return this.shift();
        // If the index is the same as the length-1, pop a node from the end of the list.
        if(index === this.length - 1) return this.pop();
        // Otherwise, use the get method to access the node at the index - 1.
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        // Set the next property on the node at the index - 1 to be the next of the next node.
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // The reverse method reverses the linked list in place.
    reverse(){
        var node = this.head;
        // Swap the head and tail.
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        // Loop through the list and set the next property on each node to be whatever the node was just before it.
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // The print method prints the linked list.
    print(){
        var arr = [];
        var current = this.head;
        // Push all the values of the list into an array.
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList();

// Add nodes to the list.
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
