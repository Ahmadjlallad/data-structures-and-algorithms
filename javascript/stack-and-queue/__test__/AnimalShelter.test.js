const AnimalShelter = require("../AnimalShelter/AnimalShelter");
describe("Queue test", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new AnimalShelter();
    queue.enqueue("dog");
    expect(queue.front.value).toBe("dog");
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new AnimalShelter();
    queue.enqueue("dog");
    queue.enqueue("cat");
    queue.enqueue("dog");
    expect(queue.front.value).toBe("dog");
    expect(queue.front.next.value).toBe("cat");
    expect(queue.front.next.next.value).toBe("dog");
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new AnimalShelter();
    queue.enqueue("dog");
    queue.enqueue("cat");
    queue.enqueue("dog");
    expect(queue.dequeue("dog")).toBe("dog");
    expect(queue.dequeue("cat")).toBe("cat");
    expect(queue.dequeue("dog")).toBe("dog");
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new AnimalShelter();
    queue.enqueue("dog");
    queue.enqueue("cat");
    queue.enqueue("dog");
    expect(queue.peek()).toBe("dog");
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new AnimalShelter();
    queue.enqueue("dog");
    queue.enqueue("cat");
    queue.enqueue("dog");
    queue.dequeue("dog");
    queue.dequeue("cat");
    queue.dequeue("dog");
    expect(queue.front).toBe(null);
  });
  it("Can successfully instantiate an empty queue", () => {
    const queue = new AnimalShelter();
    expect(queue.front).toBe(null);
  });
});
