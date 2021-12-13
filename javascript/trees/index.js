"use strict";

const BinaryTree = require("./Binary-Tree/BinaryTree.js");
const BinarySearchTree = require("./Binary-Search-Tree/BinarySearchTree.js");
const graphviz = require("./graphviz");
const Node = require("./Node");
const BT = new BinaryTree();
const BTT = new BinarySearchTree();
BT.root = new Node(
  8,
  new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))),
  new Node(10, null, new Node(14, new Node(13)))
);
BTT.addRecursive(25);
BTT.addRecursive(5);
BTT.addRecursive(8);
BTT.addRecursive(15);
BTT.addRecursive(48);
BTT.addRecursive(36);
BTT.addRecursive(38);
BTT.addRecursive(20);
BTT.addRecursive(22);
BTT.addRecursive(10);
BTT.addRecursive(45);
BTT.addRecursive(50);
BTT.addRecursive(28);
BTT.addRecursive(1);
BTT.addRecursive(12);
BTT.addRecursive(30);
const tree = new BinaryTree();
tree.root = new Node(
  2,
  new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))),
  new Node(5, null, new Node(9, new Node(4)))
);
BT.BreadthFirst();
const BT1 = new BinaryTree();

BT1.root = new Node(
  8,
  new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))),
  new Node(10, null, new Node(14, new Node(13)))
);
const BT2 = new BinaryTree();
BT2.root = new Node(
  8,
  new Node(1, new Node(2), new Node(6, new Node(4), new Node(3))),
  new Node(7, null, new Node(1, new Node(13)))
);
// console.log(BT.BreadthFirst());
graphviz(BT1.root, "./tree1.dot");
graphviz(BT2.root, "./tree2.dot");
// graphviz(BT.root, "./tree2.dot");

const SumOfOddNumbers = (tree) => {
  const _getOdd = (node) => {
    if (node === null) return 0;
    if (node.value % 2 !== 0)
      return node.value + _getOdd(node.left) + _getOdd(node.right);
    return _getOdd(node.left) + _getOdd(node.right);
  };
  return _getOdd(tree.root);
};
