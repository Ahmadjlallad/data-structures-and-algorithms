const BinaryTree = require("../Binary-Tree/BinaryTree");
const Node = require("../Node");

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

const BT = new BinarySearchTree();
const BTT = new BinarySearchTree();

BT.root = new Node(
  8,
  new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))),
  new Node(10, null, new Node(14, new Node(13)))
);
BTT.addRecursive(10);
BTT.addRecursive(5);
BTT.addRecursive(15);
console.log(BTT);
// console.log(BT.contains(5));

module.exports = BinarySearchTree;
/*
Pre-order:  8, 3, 1, 6, 4, 7, 10, 14, 13
In-order:   1, 3, 4, 6, 7, 8, 13, 14, 10
Post-order: 1, 4, 7, 6, 3, 13, 14, 10, 8
 */
