const { LinkedList } = require("../index");
const { zipLists } = require("../zipListsOpt");

describe("kthFromEnd test", () => {
  it("should zip two list even size", () => {
    const testNext = new LinkedList();
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(2);
    const testNext1 = new LinkedList();
    testNext1.appendNode(3);
    testNext1.appendNode(4);
    testNext1.appendNode(5);

    expect(zipLists(testNext, testNext1).toString()).toMatch(
      "{ 1 } -> { 3 } -> { 2 } -> { 4 } -> { 2 } -> { 5 } -> NULL"
    );
  });
  it("should zip two list first one bigger the second one", () => {
    const testNext = new LinkedList();
    testNext.appendNode(1);
    testNext.appendNode(2);
    testNext.appendNode(2);
    const testNext1 = new LinkedList();
    testNext1.appendNode(3);

    expect(zipLists(testNext, testNext1).toString()).toEqual(
      "{ 1 } -> { 3 } -> { 2 } -> { 2 } -> NULL"
    );
  });
  it("should zip two list second one bigger the first one", () => {
    const testNext = new LinkedList();
    testNext.appendNode(1);

    const testNext1 = new LinkedList();
    testNext1.appendNode(3);
    testNext1.appendNode(3);
    testNext1.appendNode(3);
    expect(zipLists(testNext, testNext1).toString()).toMatch(
      "{ 1 } -> { 3 } -> { 3 } -> { 3 } -> NULL"
    );
  });
});
