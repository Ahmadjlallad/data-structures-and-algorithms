const Stack = require("../stack/Stack");
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.rear = this.stack1.top;
  }
  enqueue(value) {
    this.stack1.push(value);
    this.rear = this.stack1.top;
  }
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.isEmpty()) throw new Error("Queue is empty");
    const value = this.stack2.pop();
    return value;
  }
  get front() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.top;
  }
}

module.exports = PseudoQueue;
