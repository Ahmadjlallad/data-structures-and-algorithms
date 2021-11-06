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
```

- appendNode method

  ```javascript
  myLinkedList.appendNode(1); // output: { head: { value: 1, next: null } }
  ```

- insertNode method
  - insertBefore

```javascript
console.log(myLinkedList); // output: { head: next: { value: 1, next: null } }

myLinkedList.insertBefore(1, 2); // output: { head: { value: 2, next: { value: 1, next: null } } }
```

- - insertAfter

```javascript
console.log(myLinkedList); // output: { head: { value: 2, next: null } }

myLinkedList.insertAfter(2, 3); // output: { head: { value: 2, next: { value: 3, next: null } } }

myLinkedList.insertAfter(3, 1); // output: { head: { value: 2, next: { value: 3, next: { value: 1, next: null } } } }
```

- Delete Node method

```javascript
console.log(myLinkedList);
// output: { head: { value: 2, next: { value: 3, next: { value: 1, next: null } } } }
myLinkedList.deleteNode(2);
// output: { head: { value: 3, next: { value: 1, next: null } } }
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
