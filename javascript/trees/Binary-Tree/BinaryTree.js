"use strict";

const Node = require("../Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  PreOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // read
      arrayOfReadNodes.push(node.value);
      // check left
      if (node.left) {
        _walk(node.left);
      }
      // check right
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);
    return arrayOfReadNodes;
  }

  PostOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // check left
      if (node.left) {
        _walk(node.left);
      }
      // check right
      if (node.right) {
        _walk(node.right);
      }
      // read
      arrayOfReadNodes.push(node.value);
    };

    _walk(this.root);
    return arrayOfReadNodes;
  }

  InOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      // check left
      if (node.left) {
        _walk(node.left);
      }
      // read
      arrayOfReadNodes.push(node.value);
      // check right
      if (node.right) {
        _walk(node.right);
      }
    };

    _walk(this.root);
    return arrayOfReadNodes;
  }
}

module.exports = BinaryTree;

// new BinaryTree(new Node(value))
