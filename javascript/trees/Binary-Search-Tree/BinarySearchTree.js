const BinaryTree = require("../Binary-Tree/BinaryTree");
const Node = require("../Node");
const renderDotTree = require("../graphviz");
class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }
  addRecursive(value) {
    if (!this.root) return (this.root = new Node(value));
    const _add = (node) => {
      if (value < node.value) {
        if (node.left) {
          _add(node.left);
        } else {
          node.left = new Node(value);
        }
      } else {
        if (node.right) {
          _add(node.right);
        } else {
          node.right = new Node(value);
        }
      }
    };

    _add(this.root);
  }
  addIterative(value) {
    if (!this.root) return (this.root = new Node(value));
    // currentRootPointer
    let cRootPointer = this.root;
    const node = new Node(value);
    while (cRootPointer) {
      if (value < cRootPointer.value)
        if (cRootPointer.left) cRootPointer = cRootPointer.left;
        else {
          cRootPointer.left = node;
          break;
        }
      else {
        if (cRootPointer.right) cRootPointer = cRootPointer.right;
        else {
          cRootPointer.right = node;
          break;
        }
      }
    }
  }
  containsRecursive(value) {
    const _contains = (node) => {
      if (node.value === value) return true;
      if (value < node.value) {
        if (node.left) return _contains(node.left);
        else return false;
      } else {
        if (node.right) return _contains(node.right);
        else return false;
      }
    };
    return _contains(this.root);
  }

  containsIterative(value) {
    // currentRootPointer
    let cRootPointer = this.root;
    while (cRootPointer) {
      if (cRootPointer.value === value) return true;
      if (value < cRootPointer.value) cRootPointer = cRootPointer.left;
      else cRootPointer = cRootPointer.right;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
