const Queue = require("../queue/PseudoQueue");
describe("Queue test", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.front.value).toBe(1);
    expect(queue.front.next.value).toBe(2);
    expect(queue.front.next.next.value).toBe(3);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });
  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.front).toBe(null);
  });
});
