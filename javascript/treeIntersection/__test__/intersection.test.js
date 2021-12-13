const BinaryTree = require("../../trees/Binary-Tree/BinaryTree");
const Node = require("../../trees/Node");
const treeIntersection = require("../tree-intersection");

describe("intersection", () => {
  test("should return the common value between", () => {
    const BT = new BinaryTree();

    BT.root = new Node(
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
    expect(treeIntersection(BT.root, BT2.root).contains(8)).toBeTruthy();
    expect(treeIntersection(BT.root, BT2.root).contains(13)).toBeTruthy();
    expect(treeIntersection(BT.root, BT2.root).contains(4)).toBeTruthy();
  });
});
