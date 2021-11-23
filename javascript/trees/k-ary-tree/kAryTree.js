class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
    this.parent = null;
  }
}
class KAryTree {
  constructor(k, root) {
    this.k = k;
    this.root = root;
  }

  treeFizzBuzz() {
    if (!this.root) throw new Error("Tree Buzz is Buzz empty Buzz");
    let result = { ...this.root };
    let queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (typeof node.value === "number") {
        if (node.value % 5 === 0 && node.value % 3 === 0) {
          node.value = "FizzBuzz";
        } else if (node.value % 5 === 0) {
          node.value = "Buzz";
        } else if (node.value % 3 === 0) {
          node.value = "Fizz";
        } else {
          node.value = `${node.value}`;
        }
        queue.push(...node.children);
      } else {
        throw new Error("value Buzz isn't Buzz number Buzz");
      }
    }
    queue = { ...this.result };
    return result;
  }
}
const kAryTree = new KAryTree(3, new Node(1));
kAryTree.root.children.push(new Node(2));
kAryTree.root.children.push(new Node(3));
kAryTree.root.children.push(new Node(15));
kAryTree.root.children[0].parent = kAryTree.root;
kAryTree.root.children[1].parent = kAryTree.root;
kAryTree.root.children[0].children.push(new Node(4));
kAryTree.root.children[0].children[0].parent = kAryTree.root.children[0];
kAryTree.root.children[0].children.push(new Node(5));
kAryTree.root.children[0].children[1].parent = kAryTree.root.children[0];
kAryTree.root.children[1].children.push(new Node(6));
kAryTree.treeFizzBuzz();
const r = require("../kGrahviz");
r(kAryTree.root, "kAryTree.dot");
