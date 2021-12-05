const Node = require("../NodeIeb");
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    if (this.isEmpty()) {
      const newNode = new Node(value);
      this.top = newNode;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
