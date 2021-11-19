const BinarySearchTree = require("../Binary-Search-Tree/BinarySearchTree");
describe("Binary tree test", () => {
  let BTT = null;
  beforeEach(() => {
    BTT = new BinarySearchTree();
  });
  afterEach(() => {
    BinaryTree = null;
  });
  it("Can successfully instantiate an empty tree", () => {
    expect(BTT).toBeDefined();
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    BTT.addRecursive(10);
    expect(BTT.root.value).toEqual(10);
  });
  it("Can successfully add a left child and right child to a single root node", () => {
    BTT.addRecursive(10);
    BTT.addRecursive(5);
    BTT.addRecursive(15);
    expect(BTT.root.left.value).toEqual(5);
    expect(BTT.root.right.value).toEqual(15);
  });
  it("Can successfully return a collection from a pre-order traversal", () => {
    BTT.addRecursive(10);
    BTT.addRecursive(5);
    BTT.addRecursive(15);
    BTT.addRecursive(3);
    BTT.addRecursive(7);
    expect(BTT.preOrder()).toEqual([10, 5, 3, 7, 15]);
  });
  it("Can successfully return a collection from an in-order traversal", () => {
    BTT.addRecursive(10);
    BTT.addRecursive(5);
    BTT.addRecursive(15);
    BTT.addRecursive(3);
    BTT.addRecursive(7);
    expect(BTT.inOrder()).toEqual([3, 5, 7, 10, 15]);
  });
  it("Can successfully return a collection from a post-order traversal", () => {
    BTT.addRecursive(10);
    BTT.addRecursive(5);
    BTT.addRecursive(15);
    BTT.addRecursive(3);
    BTT.addRecursive(7);
    expect(BTT.postOrder()).toEqual([3, 7, 5, 15, 10]);
  });
});
