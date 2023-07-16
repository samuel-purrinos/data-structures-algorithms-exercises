class Graph {
    constructor() {
      // The adjacency list to store the graph
      this.adjacencyList = {};
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        // If the vertex doesn't exist in the adjacency list, add it as an empty array
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Method to add an edge between two vertices
    addEdge(v1, v2) {
      // Add v2 to the adjacency list of v1
      this.adjacencyList[v1].push(v2);
      // Add v1 to the adjacency list of v2
      this.adjacencyList[v2].push(v1);
    }
  
    // Method to remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
      // Filter out vertex2 from the adjacency list of vertex1
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      // Filter out vertex1 from the adjacency list of vertex2
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  
    // Method to remove a vertex from the graph
    removeVertex(vertex) {
      // Remove edges between the vertex and its adjacent vertices
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
  
      // Delete the vertex from the adjacency list
      delete this.adjacencyList[vertex];
    }
  
    // Depth-First Search using recursion
    depthFirstRecursive(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
  
      // Recursive helper function
      (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfs(neighbor);
          }
        });
      })(start);
  
      return result;
    }
  
    // Depth-First Search using iteration
    depthFirstIterative(start) {
      const stack = [start];
      const result = [];
      const visited = {};
      let currentVertex;
  
      visited[start] = true;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
  
      return result;
    }
  
    // Breadth-First Search
    breadthFirst(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
  
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Create a new instance of the Graph class
  let g = new Graph();
  
  // Add vertices to the graph
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  
  // Add edges between vertices
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  
  // Graph Visualization:
  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F
  
  // Perform breadth-first search starting from vertex "A"
  // The expected output is [A, B, C, D, E, F]
  