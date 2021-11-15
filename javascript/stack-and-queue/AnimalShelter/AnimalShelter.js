const Node = require("../NodeIeb");

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(animal) {
    const newNode = new Node(animal);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
      return this.front;
    }
  }

  dequeue(pref) {
    if (this.isEmpty()) {
      throw new Error("The queue is Empty");
    }
    if (pref !== "dog" && pref !== "cat") return null;
    let current = this.front;
    let prev = this.front;
    let counter = 1;
    if (current.value !== pref) {
      current = current.next;
      while (current?.value !== pref) {
        current = current?.next;
        prev = prev?.next;
        counter++;
        if (!current) return null;
      }
    } else {
      this.front = this.front.next;
      this.length -= 1;
      return current.value;
    }
    const temp = current;
    prev.next = current.next;
    temp.next = null;
    if (counter === this.length - 1) this.rear.value = prev.value;
    this.length -= 1;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("The queue is Empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}
const shelter = new AnimalShelter();
shelter.enqueue("dog");
shelter.enqueue("dog");
shelter.enqueue("dog");

console.log(shelter.dequeue("cat"));
console.log(shelter.dequeue("cat"));
console.log(JSON.stringify(shelter));
module.exports = AnimalShelter;
