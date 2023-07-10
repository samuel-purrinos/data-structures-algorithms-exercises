// First, we create a Node class. Each node has a value, a left child, and a right child.
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Then we create the Binary Search Tree (BST) class. The BST starts with a root node.
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    // The insert method is used to add nodes to the BST.
    insert(value){
        // First, we create a new node using the value passed to the function.
        var newNode = new Node(value);

        // If there's no root, the new node becomes the root.
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        // If there is a root, we start there to find the appropriate place for the new node.
        var current = this.root;

        // Then, we enter a loop that will run until we've either found a place for our node, 
        // or discovered that the value already exists in the tree (no duplicates allowed).
        while(true){
            // If the value already exists, we return undefined (or any other value indicating failure).
            if(value === current.value) return undefined;

            // If the value is less than the current node's value, we go left.
            if(value < current.value){
                // If there's no node to the left, we add our new node there.
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }

                // If there is a node, we update 'current' and do another pass of the loop.
                current = current.left;
            } 
            // If the value is greater than the current node's value, we go right.
            else {
                // If there's no node to the right, we add our new node there.
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }

                // If there is a node, we update 'current' and do another pass of the loop.
                current = current.right;
            }
        }
    }

    // The find method is used to find a specific value in the BST.
    find(value){
        // If there's no root, there's nothing to find, so we return false.
        if(this.root === null) return false;

        // We start the search at the root.
        var current = this.root,
            found = false;

        // We continue to search as long as we have a current node and haven't found our value.
        while(current && !found){
            // If the value is less than the current node's value, we move to the left.
            if(value < current.value){
                current = current.left;
            } 
            // If the value is greater than the current node's value, we move to the right.
            else if(value > current.value){
                current = current.right;
            } 
            // If neither condition is met, we've found our value!
            else {
                found = true;
            }
        }

        // If we haven't found the value, we return undefined.
        if(!found) return undefined;

        // If we have found the value, we return the node.
        return current;
    }

    // The contains method is similar to the find method, but returns just true or false.
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// Example usage:
// Create a new Binary Search Tree
var tree = new BinarySearchTree();

// Insert nodes into the tree
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
