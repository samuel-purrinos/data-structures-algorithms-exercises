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
  }
  
  // Create a new instance of the Graph class
  let g = new Graph();
  
  // Add vertices to the graph
  g.addVertex("Dallas");
  g.addVertex("Tokyo");
  g.addVertex("Aspen");
  g.addVertex("Los Angeles");
  g.addVertex("Hong Kong");
  
  // Add edges between vertices
  g.addEdge("Dallas", "Tokyo");
  g.addEdge("Dallas", "Aspen");
  g.addEdge("Hong Kong", "Tokyo");
  g.addEdge("Hong Kong", "Dallas");
  g.addEdge("Los Angeles", "Hong Kong");
  g.addEdge("Los Angeles", "Aspen");
  