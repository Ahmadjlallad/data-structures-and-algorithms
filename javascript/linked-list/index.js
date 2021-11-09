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
  deleteNode(deletedValue) {
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
}

/**
 *
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @returns LinkedList
 * @example
 *   head -> [1] -> [3] -> [2] -> X head -> [5] -> [9] -> [4] -> X head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
 */
const zipLists = (list1, list2) => {
  let counter = list2.length > list1.length ? list2.length : list1.length;
  let current = list1.head;
  let current2 = list2.head;
  let newList = new LinkedList();

  while (counter >= 1) {
    if (current?.value) newList.appendNode(current.value);
    if (current2?.value) newList.appendNode(current2.value);
    current = current?.next;
    current2 = current2?.next;
    counter--;
  }

  return newList;
};
module.exports = {
  LinkedList,
  zipLists,
};
