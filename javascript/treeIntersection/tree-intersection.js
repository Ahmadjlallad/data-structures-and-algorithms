const HashTable = require("../Hash-Table/hashTable");
function treeIntersection(root1, root2) {
  const result = new HashTable(1024);
  const _treeIntersection = (root1, root2) => {
    if (!root1 || !root2) return;
    if (root1.value === root2.value) {
      result.add(root1.value, root1.value);
    }
    _treeIntersection(root1.left, root2.left);
    _treeIntersection(root1.right, root2.right);
  };
  _treeIntersection(root1, root2);
  return result;
}

module.exports = treeIntersection;
