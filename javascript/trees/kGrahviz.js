module.exports = function renderDotTree(node, path) {
  let nullCount = 0;
  let dot = "strict digraph {\n";
  dot += "node [fontsize=14, height=.1 fontname=Courier];\n";
  dot += "edge [fontsize=14];\n";
  dot += `  ${node.value}0[label=${node.value}];\n`;
  const _render = (node, c) => {
    for (let i = 0; i < node.children?.length; i++) {
      dot += `  ${node.value}${c} -> ${node.children[i].value}${c + 1};\n  ${
        node.children[i].value
      }${c + 1}[label=${node.children[i].value}];\n`;
      _render(node.children[i], c + 1);
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
        (answer) => {
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
