var reverse = function (node) {
  var prev = null;
  var current = node.head;
  var next = null;
  var head = node.head;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node.head = prev;
  node.tail = head;
  return node;
};
module.exports = reverse;
