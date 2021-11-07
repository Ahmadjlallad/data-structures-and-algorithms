# Singly Linked List

A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

## Challenge

need to create a singly linked list class that create a linked list and append to head if the list is empty, otherwise append to next node.

- Code Challenge: Class 05: Singly Linked List
  - single liked list class with one method: append
- Code Challenge: Class 06: Extend a Linked List to allow various insertion methods.
  - Extend a linked list class to allow various insertion methods and delete methods.

## Approach & Efficiency

using a class to create a linked list.
Big O: O(n)

## API

```javascript
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
  }
  appendNode(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
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
}
```

## Solution

- initialize the head to null

```javascript
const myLinkedList = new LinkedList();
// output: { head: null }
```

- appendNode method

  ```javascript
  myLinkedList.appendNode(1); // output: { head: { value: 1, next: null } }
  ```

- insertNode method

  ```javascript
  myLinkedList.insertNode(2); // output: { head: { value: 2, next: { value: 1, next: null } } }
  ```

```javascript
myLinkedList.includes(1); // output: true
```

```javascript
myLinkedList.toString(); // output: "{ 1 } -> { 2 } -> NULL"
```

- [x] Top-level README “Table of Contents” is updated
- [x] README for this challenge is complete
  - [x] Summary, Description, Approach & Efficiency, Solution
  - [x] Picture of whiteboard
  - [x] Link to code
- [x] Feature tasks for this challenge are completed
- [x] Unit tests written and passing
  - [x] “Happy Path” - Expected outcome
  - [x] Expected failure
  - [x] Edge Case (if applicable/obvious)
