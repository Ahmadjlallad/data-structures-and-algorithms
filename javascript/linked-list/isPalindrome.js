const isPalindrome = (list) => {
  let current = list.head;
  let i = list.length;
  if (!(current.value === list.tail.value)) return false;
  while (i > Math.ceil(list.length / 2)) {
    current = list.head;
    current = current.next;
    list.head = current;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    list.tail.value = current.value;
    if (!(list.head.value === list.tail.value)) return false;
    i--;
  }
  return true;
};
module.exports = isPalindrome;
const { LinkedList } = require("./index");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function plaid(list) {
  let current = list.head;
  let counter = 0;
  const newList = new LinkedList();
  while (counter < Math.floor(list.length / 2)) {
    const newNode = new Node(current.value);
    newNode.next = newList.head;
    newList.head = newNode;
    current = current.next;
    counter++;
  }
  if (list.length % 2 === 1) current = current.next;
  let current2 = newList.head;

  while (current) {
    if (current.value !== current2.value) return false;
    current = current.next;
    current2 = current2.next;
  }

  return true;
}

function plaidRec(list) {
  const stack = [];
  let current = list.head;
  let counter = 1;
  while (current) {
    if (counter <= Math.floor(list.length / 2)) {
      if (list.length % 2 === 1 && counter !== Math.floor(list.length / 2))
        stack.push(current.value);
    } else if (
      list.length % 2 === 0 &&
      counter <= Math.floor(list.length / 2)
    ) {
      stack.push(current.value);
    } else {
      if (current.value !== stack.pop()) return false;
    }
    current = current.next;
    counter++;
  }
  return true;
}
const linked = new LinkedList();
linked.appendNode("r");
linked.appendNode("o");
linked.appendNode("t");

linked.appendNode("a");

linked.appendNode("t");
linked.appendNode("o");
linked.appendNode("r");
console.log(plaidRec(linked));
// [ a b c c b a]
