const { Vertex, Edge, Graph } = require("../graph");
test("Node can be successfully added to the graph", () => {
  const graph = new Graph();
  const vertex = new Vertex(1);
  graph.addVertex(vertex);
  expect(graph.size()).toBe(1);
});
test("An edge can be successfully added to the graph", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  const vertex2 = new Vertex(2);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addDirectedEdge(vertex1, vertex2);
  expect(graph.size()).toBe(2);
});
test("A collection of all nodes can be properly retrieved from the graph", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  const vertex2 = new Vertex(2);
  const vertex3 = new Vertex(3);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addVertex(vertex3);
  graph.addDirectedEdge(vertex1, vertex2);
  graph.addDirectedEdge(vertex2, vertex3);
  expect(graph.size()).toBe(3);
});
test("All appropriate neighbors can be retrieved from the graph", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  const vertex2 = new Vertex(2);
  const vertex3 = new Vertex(3);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addVertex(vertex3);
  graph.addDirectedEdge(vertex1, vertex2);
  graph.addDirectedEdge(vertex2, vertex3);
  expect(graph.getNeighbors(vertex3)).toStrictEqual([]);
});
test("Neighbors are returned with the weight between nodes included", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  const vertex2 = new Vertex(2);
  const vertex3 = new Vertex(3);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addVertex(vertex3);
  graph.addDirectedEdge(vertex1, vertex2, 5);
  graph.addDirectedEdge(vertex2, vertex3, 10);
  expect(graph.getWeight(vertex1, vertex2)).toBe(5);
  expect(graph.getWeight(vertex2, vertex3)).toBe(10);
});
test("The proper size is returned, representing the number of nodes in the graph", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  const vertex2 = new Vertex(2);
  const vertex3 = new Vertex(3);
  graph.addVertex(vertex1);
  graph.addVertex(vertex2);
  graph.addVertex(vertex3);
  graph.addDirectedEdge(vertex1, vertex2);
  graph.addDirectedEdge(vertex2, vertex3);
  expect(graph.size()).toBe(3);
});
test("A graph with only one node and edge can be properly returned", () => {
  const graph = new Graph();
  const vertex1 = new Vertex(1);
  graph.addVertex(vertex1);
  graph.addDirectedEdge(vertex1, vertex1);
  expect(graph.size()).toBe(1);
});
test("An empty graph properly returns null", () => {
  const graph = new Graph();
  expect(graph.size()).toBe(0);
});
