"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    if (!this.root) return [];
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

  postOrder() {
    if (!this.root) return [];
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

  inOrder() {
    if (!this.root) return [];
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
  maximum() {
    if (!this.root) return [];
    const _max = (node) => {
      if (!node) return -Infinity;
      const max =
        _max(node.right) > _max(node.left) ? _max(node.right) : _max(node.left);
      return max > node.value ? max : node.value;
    };
    return _max(this.root);
  }
  BreadthFirst() {
    if (!this.root) return [];
    let queue = [this.root];
    let arrayOfReadNodes = [];
    while (queue.length > 0) {
      let node = queue.shift();
      arrayOfReadNodes.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return arrayOfReadNodes;
  }
}

module.exports = BinaryTree;
