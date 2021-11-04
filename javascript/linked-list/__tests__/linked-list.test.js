/* eslint-disable */
// I don't Like eslint ok?! i like " " quotes heade single quotes
"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("Linked List", () => {
  it("works", () => {
    expect(false).toBeFalsy(); // false
  });
  it("should append to head", () => {
    const testTheHead = new LinkedList(1);
    testTheHead.appendNode(1);
    expect(testTheHead.head).toBeTruthy();
  });
  it("should append to the next", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    expect(testNext.head.next).toBeTruthy();
  });
  it("should append to head the value correctly", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    expect(testNext.head.value).toEqual(1);
  });
  it("should append to next the value correctly", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    expect(testNext.head.next.value).toEqual(2);
  });
});
