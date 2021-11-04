# Singly Linked List

A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

## Challenge

need to create a singly linked list class that create a linked list and append to head if the list is empty, otherwise append to next node.

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
}
```

<!-- Description of each method publicly available to your Linked List -->
