class WeightedGraph {
    constructor() {
      // The adjacency list to store the weighted graph
      this.adjacencyList = {};
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        // If the vertex doesn't exist in the adjacency list, add it as an empty array
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Method to add an edge between two vertices with a weight
    addEdge(vertex1, vertex2, weight) {
      // Add vertex2 to the adjacency list of vertex1 with the specified weight
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      // Add vertex1 to the adjacency list of vertex2 with the specified weight
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  
    // Dijkstra's algorithm for finding the shortest path
    Dijkstra(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = []; // To return at the end
      let smallest;
  
      // Build up the initial state
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }
  
      // As long as there is something to visit
      while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
          // We have reached the destination, build up the path to return at the end
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }
  
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor of this.adjacencyList[smallest]) {
            // Find the neighboring node
            let nextNode = neighbor.node;
            // Calculate the new distance to the neighboring node
            let candidate = distances[smallest] + neighbor.weight;
            if (candidate < distances[nextNode]) {
              // Update the new smallest distance to the neighbor
              distances[nextNode] = candidate;
              // Update the previous - how we got to the neighbor
              previous[nextNode] = smallest;
              // Enqueue in priority queue with the new priority
              nodes.enqueue(nextNode, candidate);
            }
          }
        }
      }
  
      // Return the shortest path
      return path.concat(smallest).reverse();
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (element.priority >= parent.priority) break;
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }
  
    dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }
  
    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
  
  class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }
  
  // Create a new instance of the WeightedGraph class
  var graph = new WeightedGraph();
  
  // Add vertices to the graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  // Add edges between vertices with weights
  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);
  
  // Perform Dijkstra's algorithm to find the shortest path from "A" to "E"
  // The expected output is the shortest path: ["A", "C", "D", "F", "E"]
  