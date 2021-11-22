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
  let dot = "strict digraph {\n";
  dot += "node [fontsize=14, height=.1 fontname=Courier];\n";
  dot += "edge [fontsize=14];\n";
  dot += `  ${node.value}0[label=${node.value}];\n`;
  const _render = (node: Node, c: number) => {
    if (node.left) {
      dot += `  ${node.value}${c} -> ${node.left.value}${c + 1};\n  ${
        node.left.value
      }${c + 1}[label=${node.left.value}];\n`;
      _render(node.left, c + 1);
    } else {
      dot += `  null${nullCount}[shape=point];\n  ${node.value}${c} -> null${nullCount}[color = blue];\n`;
      nullCount++;
    }
    if (node.right) {
      dot += `  ${node.value}${c} -> ${node.right.value}${c + 1};\n${
        node.right.value
      }${c + 1}[label=${node.right.value}];\n`;
      _render(node.right, c + 1);
    } else {
      dot += `  null${nullCount}[shape=point];\n  ${node.value}${c} -> null${nullCount}[color = blue];\n`;
      nullCount++;
    }
  };
  _render(node, 0);
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
