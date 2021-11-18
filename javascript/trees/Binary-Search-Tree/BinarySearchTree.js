const BinaryTree = require("../Binary-Tree/BinaryTree");
const Node = require("../Node");

class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }
  add(value) {
    const _walk = (node) => {
      if (value < node.value) {
        if (node.left) {
          _walk(node.left);
        } else {
          node.left = new Node(value);
        }
      } else {
        if (node.right) {
          _walk(node.right);
        } else {
          node.right = new Node(value);
        }
      }
    };
    _walk(this.root);
  }
  Contains(value) {
    const _walk = (node) => {
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        if (node.left) {
          return _walk(node.left);
        } else {
          return false;
        }
      } else {
        if (node.right) {
          return _walk(node.right);
        } else {
          return false;
        }
      }
    };

    return _walk(this.root);
  }
}

const BT = new BinarySearchTree();

BT.root = new Node(
  8,
  new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))),
  new Node(10, new Node(14, new Node(13)))
);

module.exports = BinarySearchTree;
