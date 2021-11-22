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
module.exports = function renderDotTree(node, path) {
    if (path === void 0) { path = null; }
    var nullCount = 0;
    var dot = "strict digraph {\n";
    dot += "node [fontsize=14, height=.1 fontname=Courier];\n";
    dot += "edge [fontsize=14];\n";
    dot += "  " + node.value + "0[label=" + node.value + "];\n";
    var _render = function (node, c) {
        if (node.left) {
            dot += "  " + node.value + c + " -> " + node.left.value + (c + 1) + ";\n  " + node.left.value + (c + 1) + "[label=" + node.left.value + "];\n";
            _render(node.left, c + 1);
        }
        else {
            dot += "  null" + nullCount + "[shape=point];\n  " + node.value + c + " -> null" + nullCount + "[color = blue];\n";
            nullCount++;
        }
        if (node.right) {
            dot += "  " + node.value + c + " -> " + node.right.value + (c + 1) + ";\n" + node.right.value + (c + 1) + "[label=" + node.right.value + "];\n";
            _render(node.right, c + 1);
        }
        else {
            dot += "  null" + nullCount + "[shape=point];\n  " + node.value + c + " -> null" + nullCount + "[color = blue];\n";
            nullCount++;
        }
    };
    _render(node, 0);
    dot += "}";
    if (path) {
        var fs_1 = require("fs");
        if (fs_1.existsSync(path)) {
            var readline = require("readline");
            var rl_1 = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl_1.question("path already exist do you want to over writ it? y or n\n", function (answer) {
                if (answer.toLocaleLowerCase() === "y" ||
                    answer.toLocaleLowerCase() === "yes") {
                    fs_1.truncateSync(path, 0);
                    fs_1.writeFileSync(path, dot);
                    rl_1.close();
                }
                else {
                    rl_1.close();
                }
            });
        }
        else
            fs_1.writeFileSync(path, dot);
    }
    return dot;
};
