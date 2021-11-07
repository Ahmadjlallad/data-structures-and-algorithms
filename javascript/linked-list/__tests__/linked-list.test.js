/* eslint-disable */
// I don't Like eslint ok?! i like " " quotes heade single quotes
"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("Linked List", () => {
  it("Can successfully instantiate an empty linked list", () => {
    const testTheHead = new LinkedList(1);
    expect(testTheHead.head).toBeNull();
  });
  it("Can properly insert into the linked list", () => {
    const testTheHead = new LinkedList(1);
    testTheHead.appendNode(1);
    testTheHead.insertNode(2);
    expect(testTheHead.head.value).toEqual(2);
    expect(testTheHead.head.next.value).toEqual(1);
  });
  it("The head property will properly point to the first node in the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    expect(testNext.head.value).toEqual(1);
    expect(testNext.head.next.value).toEqual(2);
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    expect(testNext.head.value).toEqual(1);
    expect(testNext.head.next.value).toEqual(2);
    expect(testNext.head.next.next.value).toEqual(3);
  });
  it("Will return true when finding a value within the linked list that exists", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    expect(testNext.includes(2)).toBeTruthy();
  });

  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    expect(testNext.includes(5)).toBeFalsy();
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode("a");
    testNext.appendNode("b");
    testNext.appendNode("c");
    expect(testNext.toString()).toMatch("{ a } -> { b } -> { c } -> NULL");
  });

  it("should successfully add a node to the end of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    expect(testNext.head.value).toEqual(1);
  });
  it("should successfully add multiple nodes to the end of a linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    expect(testNext.head.next.value).toEqual(2);
  });
  it("should successfully insert a node before a node located i the middle of a linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.insertBefore(4, 3);
    expect(testNext.head.next.next.value).toEqual(3);
  });
  it("should successfully insert a node before the first node of a linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.insertBefore(1, 3);
    expect(testNext.head.value).toEqual(3);
  });
  it("should successfully insert after a node in the middle of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.insertAfter(4, 3);
    expect(testNext.head.next.next.next.value).toEqual(3);
  });
  it("should successfully insert a node after the last node of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.insertAfter(5, 3);
    let currentNode = testNext.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual(3);
  });
  it("should successfully delete a node any where", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.deleteNode(3);
    let currentNode = testNext.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      expect(currentNode.value).not.toEqual(3);
    }
  });
});
