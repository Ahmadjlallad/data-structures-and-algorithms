interface Node {
  value: any;
  left: Node;
  right: Node;
}
/**
 * @description: function to render the dot tree in a dot file
 * @example
 * const node = {
 * value: 1,
 * left: {
 * value: 2,
 *    left: {
 *    value: 4,
 *    left: null,
 *    right: null
 *    }
 * },
 * right: {
 * value: 5,
 * left: null,
 * right: null
 * }
 * }
 *
 * renderDotTree(node, "./BinarySearchTree.dot");
 *
 */

module.exports = function renderDotTree(
  node: Node,
  path: null | string = null
): string {
  let nullCount = 0;
  let dot = "digraph G {\n";
  const _render = (node: Node) => {
    if (node.left) {
      dot += `   ${node.value} -> ${node.left.value}[label="l" color = green]\n`;
      _render(node.left);
    } else {
      dot += `   null${nullCount}[shape=point]\n   ${node.value} -> null${nullCount}[color = blue]\n`;
      nullCount++;
    }
    if (node.right) {
      dot += `   ${node.value} -> ${node.right.value}[label="r" color = green]\n`;
      _render(node.right);
    } else {
      dot += `   null${nullCount}[shape=point]\n   ${node.value} -> null${nullCount}[color = blue]\n`;
      nullCount++;
    }
  };
  _render(node);
  dot += "}";
  if (path) {
    const fs = require("fs");
    if (fs.existsSync(path)) {
      const readline = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(
        "path already exist do you want to over writ it? y or n\n",
        (answer: string) => {
          if (
            answer.toLocaleLowerCase() === "y" ||
            answer.toLocaleLowerCase() === "yes"
          ) {
            fs.truncateSync(path, 0);
            fs.writeFileSync(path, dot);
            rl.close();
          } else {
            rl.close();
          }
        }
      );
    } else fs.writeFileSync(path, dot);
  }
  return dot;
};
