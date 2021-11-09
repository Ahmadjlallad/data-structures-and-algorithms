const { LinkedList } = require("../index");

describe("kthFromEnd test", () => {
  it("Where k is greater than the length of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    testNext.appendNode(4);
    testNext.appendNode(5);

    expect(testNext.kthFromEnd(6)).toBeNull();
  });
  it("Where k and the length of the list are the same", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    testNext.appendNode(4);
    testNext.appendNode(5);

    expect(testNext.kthFromEnd(4)).toEqual(1);
  });
  it("Where k is not a positive integer", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.deleteNode(3);
    expect(testNext.kthFromEnd(-6)).toBeNull();
  });
  it("Where the linked list is of a size 1", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    expect(testNext.kthFromEnd(0)).toEqual(1);
  });
  it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    const testNext = new LinkedList(1);
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(3);
    testNext.appendNode(4);
    testNext.appendNode(5);
    testNext.appendNode(3);
    expect(testNext.kthFromEnd(3)).toEqual(3);
  });
});
