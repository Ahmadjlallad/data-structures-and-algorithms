"use strict";
/**
 * @class Node
 * Node a class used to create node in LinkedList class
 * takes a singe value and default the next function to be null
 * @private any
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * @class LinkedList
 * use to create a linked list
 * @method appendNode(any) witch use to append node to the list if the head
 * is not appended this method will append the value to it
 * other wise will append to next property
 *
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  appendNode(value) {
    /**
     * when i create a linked list the head and tail are the same and point to the same heap address
     * when i append a node to the linked list the tail points to the new node and the head points to the new node
     * when second value is appended to the link list the tile will point the the next node in the head and the tile will point to the next node in the tail
     *
     */
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  insertNode(value) {
    /**
     * @method insertNode(any)
     * @param value
     * @returns linked list
     * @description insert a node to the list at the head
     */
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    this.head = node;
    node.next = currentNode;
    this.length++;
  }
  includes(value) {
    /**
     * @method includes(any)
     * @param value
     * @returns boolean
     * @description check if the value is in the list or not
     */
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  toString() {
    /**
     * @method toString()
     * @returns string
     * @description convert the list to string
     */
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    string += "NULL";
    return string;
  }
  insertBefore(beforeNodeValue, value) {
    /**
     * @method insertBefore(beforeNodeValue,value)
     * use to insert a node before a node with the value of beforeNodeValue
     * @param beforeNodeValue any
     * @param value any
     * @returns LinkedList
     */
    if (!beforeNodeValue || !value)
      throw new Error(`Invalid input ${beforeNodeValue && value}`);
    try {
      if (!this.head) return this;
      let currentNode = this.head;
      let previousNode = new LinkedList();

      while (currentNode.value !== beforeNodeValue) {
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
        if (!currentNode) return this;
      }

      previousNode.appendNode(value);

      while (currentNode) {
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
      }

      this.head = previousNode.head;
      this.tail = previousNode.tail;
      this.length++;
      return this;
    } catch (e) {
      console.log(e.message);
    }
  }
  insertAfter(afterNode, value) {
    /**
     * @method insertAfter(afterNode,value)
     * use to insert a node before a node with the value of afterNode
     * @param afterNode any
     * @param value any
     * @returns LinkedList
     */

    if (!afterNode || !value)
      throw new Error(`Invalid input ${afterNode && value}`);
    try {
      if (!this.head) return this;
      let currentNode = this.head;
      let previousNode = new LinkedList();

      while (true) {
        if (currentNode?.value === afterNode) {
          previousNode.appendNode(currentNode.value);
          currentNode = currentNode.next;
          break;
        }
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
        if (!currentNode) return this;
      }

      previousNode.appendNode(value);

      while (currentNode) {
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
      }

      this.head = previousNode.head;
      this.tail = previousNode.tail;
      this.length++;
      return this;
    } catch (e) {
      console.error();
    }
  }
  insertAfter(deletedValue) {
    /**
     * @method deleteNode(deletedValue)
     * use to delete a node with the value of value
     * @param deletedValue any
     * @returns LinkedList
     */
    try {
      if (!deletedValue)
        throw new Error("Invalid input deletedValue is " + deletedValue);
      if (!this.head) return this;
      let currentNode = this.head;
      let previousNode = new LinkedList();
      let counter = 0;
      while (currentNode.next) {
        if (currentNode.value !== deletedValue) {
          previousNode.appendNode(currentNode.value);
        }
        counter++;
        currentNode = currentNode.next;
      }

      this.head = previousNode.head;
      this.tail = previousNode.tail;
      this.length--;
      return this;
    } catch (e) {
      console.error(e);
    }
  }
  kthFromEnd(k) {
    k += 1;
    if (typeof k !== "number") return null;
    if (k === 1) return this.tail.value;
    if (k === this.length) return this.head.value;
    if (k > this.length) return null;
    if (k < 1) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter < this.length - k) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
  }
  insertBeforeObt(loc, value) {
    if (!this.head) return this;
    const newNode = new Node(value);
    if (this.head.value === loc) {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (loc !== currentNode.next.value) {
      currentNode = currentNode.next;
      if (!currentNode.next)
        throw new Error(`No value match the provided value ${loc}`);
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }
  insertAfterObt(loc, value) {
    if (!this.head) return this;
    const newNode = new Node(value);
    if (this.tail.value === loc) {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
    let currentNode = this.head;
    while (loc !== currentNode.value) {
      currentNode = currentNode.next;
      if (!currentNode)
        throw new Error(`No value match the provided value ${loc}`);
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }
}

module.exports = {
  LinkedList,
};
