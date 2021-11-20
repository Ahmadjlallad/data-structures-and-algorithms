"use strict";
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
    var dot = "digraph G {\n";
    var _render = function (node) {
        if (node.left) {
            dot += "   " + node.value + " -> " + node.left.value + "[label=\"l\" color = green]\n";
            _render(node.left);
        }
        else {
            dot += "   null" + nullCount + "[shape=point]\n   " + node.value + " -> null" + nullCount + "[color = blue]\n";
            nullCount++;
        }
        if (node.right) {
            dot += "   " + node.value + " -> " + node.right.value + "[label=\"r\" color = green]\n";
            _render(node.right);
        }
        else {
            dot += "   null" + nullCount + "[shape=point]\n   " + node.value + " -> null" + nullCount + "[color = blue]\n";
            nullCount++;
        }
    };
    _render(node);
    dot += "}";
    if (path) {
        var fs_1 = require("fs");
        if (fs_1.existsSync(path)) {
            var readline = require("readline");
            var rl_1 = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
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
