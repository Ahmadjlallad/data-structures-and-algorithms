"use strict";
class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this.list = new Map();
  }
  addVertex(vertex) {
    this.list.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      console.log("Invalid nodes");
    }
    const edge = new Edge(endVertex, weight);
    const start = this.list.get(startVertex);
    start.push(edge);
  }
  getNeighbors(vertex) {
    if (!this.list.has(vertex)) {
      console.log("Invalid nodes");
    }
    return this.list.get(vertex);
  }
  getWeight(startVertex, endVertex) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      console.log("Invalid nodes");
    }
    const neighbors = this.list.get(startVertex);
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].vertex === endVertex) {
        return neighbors[i].weight;
      }
    }
    return null;
  }
  size() {
    return this.list.size;
  }
  printAll() {
    for (const [vertex, edge] of this.list.entries()) {
      console.log(vertex, edge);
    }
  }
}
module.exports = { Vertex, Edge, Graph };
