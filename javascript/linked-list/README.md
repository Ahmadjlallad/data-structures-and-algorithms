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
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
        if (currentNode?.value === afterNode) {
          previousNode.appendNode(currentNode.value);
          currentNode = currentNode.next;
          break;
        }
        if (!currentNode) return this;
      }

      previousNode.appendNode(value);

      while (currentNode) {
        previousNode.appendNode(currentNode.value);
        currentNode = currentNode.next;
      }

      this.head = previousNode.head;
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
      console.log(currentNode);
      while (currentNode.next) {
        console.log(currentNode.value !== deletedValue);
        console.log(currentNode.value);
        if (currentNode.value !== deletedValue) {
          previousNode.appendNode(currentNode.value);
        }
        currentNode = currentNode.next;
      }

      this.head = previousNode.head;
      return this;
    } catch (e) {
      console.error(e);
    }
  }
}
```

## Solution

- initialize the head to null

```javascript
const myLinkedList = new LinkedList();
// output: { head: null }
// new LinkedList { head: null, tail: null, length: 0 }
```

- appendNode method

  ```javascript
  myLinkedList.appendNode(1);
  myLinkedList.appendNode(2);
  myLinkedList.includes(1); // output: true
  myLinkedList.toString(); // output: { 2 } -> { 1 } -> { 2 } -> NULL
  /*new LinkedList {
  head: Node { value: 1, next: Node { value: 2, next: null } },
  tail: Node { value: 2, next: null },
  length: 2
  }
  */
  ```

- insertNode method

  - insertNode at the head

  ```javascript
  myLinkedList.insertNode(2); // {"head":{"value":2,"next":{"value":1,"next":{"value":2,"next":null}}},"tail":{"value":2,"next":null},"length":3}
  ```

  - insertBefore

  ```javascript
  console.log(myLinkedList); // output: { head: next: { value: 1, next: null },"tail":{"value":1,"next":null},"length":1 }

  myLinkedList.insertBefore(1, 2); // {"head":{"value":2,"next":{"value":1,"next":null}},"tail":{"value":1,"next":null},"length":2}
  ```

  - insertAfter

  ```javascript
  console.log(myLinkedList); // output: {"head":{"value":1,"next":null},"tail":{"value":1,"next":null},"length":1}

  myLinkedList.insertAfter(2, 3); // output: {"head":{"value":1,"next":{"value":2,"next":null}},"tail":{"value":2,"next":null},"length":2}
  ```

  - Delete Node method

  ```javascript
  console.log(myLinkedList);
  //{"head":{"value":2,"next":{"value":1,"next":null}},"tail":{"value":1,"next":null},"length":2}
  myLinkedList.deleteNode(2);
  //{"head":{"value":2,"next":null},"tail":{"value":2,"next":null},"length":1}
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
